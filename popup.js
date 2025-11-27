// Language Management
let currentLang = 'ar';

document.addEventListener('DOMContentLoaded', async () => {
  const saved = await chrome.storage.sync.get(['language', 'primaryEmail', 'aliases']);
  currentLang = saved.language || 'ar';
  updateLanguage();
  
  if (saved.primaryEmail) {
    document.getElementById('primaryEmail').value = saved.primaryEmail;
    displayAliases(saved.aliases || []);
  }
});

// Language Toggle
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  chrome.storage.sync.set({ language: currentLang });
  updateLanguage();
});

function updateLanguage() {
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('langToggle').textContent = currentLang === 'ar' ? 'EN' : 'عربي';
  
  document.querySelectorAll('[data-en][data-ar]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });
}

// Generate Aliases
document.getElementById('generateBtn').addEventListener('click', async () => {
  const email = document.getElementById('primaryEmail').value.trim();
  
  if (!email || !email.endsWith('@gmail.com')) {
    alert(currentLang === 'ar' ? 'الرجاء إدخال بريد Gmail صحيح' : 'Please enter a valid Gmail address');
    return;
  }
  
  const username = email.split('@')[0];
  const aliases = generateGmailAliases(username);
  
  await chrome.storage.sync.set({ primaryEmail: email, aliases: aliases });
  displayAliases(aliases);
});

function generateGmailAliases(username) {
  const aliases = [];
  
  if (username.length > 1) {
    for (let i = 1; i < Math.min(username.length, 4); i++) {
      const dotted = username.slice(0, i) + '.' + username.slice(i);
      aliases.push({
        id: Date.now() + i,
        email: dotted + '@gmail.com',
        type: 'dot',
        usedOn: []
      });
    }
  }
  
  const plusVariations = ['test', 'newsletter', 'shop', 'social', 'work'];
  plusVariations.forEach((suffix, idx) => {
    aliases.push({
      id: Date.now() + 100 + idx,
      email: `${username}+${suffix}@gmail.com`,
      type: 'plus',
      usedOn: []
    });
  });
  
  return aliases.slice(0, 10);
}

function displayAliases(aliases) {
  const container = document.getElementById('aliasesList');
  
  if (!aliases || aliases.length === 0) {
    container.innerHTML = `<div class="empty-state">${currentLang === 'ar' ? 'لا توجد إيميلات' : 'No aliases'}</div>`;
    return;
  }
  
  container.innerHTML = aliases.map(alias => `
    <div class="alias-card">
      <div class="alias-email">${alias.email}</div>
      <div class="alias-site">${alias.usedOn.length > 0 ? alias.usedOn.join(', ') : (currentLang === 'ar' ? 'لم يُستخدم' : 'Not used')}</div>
      <div class="alias-actions">
        <button class="btn-copy" data-email="${alias.email}">${currentLang === 'ar' ? 'نسخ' : 'Copy'}</button>
        <button class="btn-use" data-id="${alias.id}" data-email="${alias.email}">${currentLang === 'ar' ? 'استخدم' : 'Use'}</button>
      </div>
    </div>
  `).join('');
  
  container.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => copyEmail(btn.dataset.email));
  });
  
  container.querySelectorAll('.btn-use').forEach(btn => {
    btn.addEventListener('click', () => useOnSite(btn.dataset.id, btn.dataset.email));
  });
}

function copyEmail(email) {
  navigator.clipboard.writeText(email);
  alert(currentLang === 'ar' ? 'تم النسخ!' : 'Copied!');
}

async function useOnSite(aliasId, email) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const domain = new URL(tab.url).hostname;
  
  const { aliases } = await chrome.storage.sync.get('aliases');
  const alias = aliases.find(a => a.id == aliasId);
  if (alias && !alias.usedOn.includes(domain)) {
    alias.usedOn.push(domain);
    await chrome.storage.sync.set({ aliases });
  }
  
  chrome.tabs.sendMessage(tab.id, { action: 'fillEmail', email: email });
  displayAliases(aliases);
}
