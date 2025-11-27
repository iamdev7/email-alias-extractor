// Background service worker
chrome.runtime.onInstalled.addListener(() => {
  console.log('Email Alias Extractor installed successfully!');
});

// Optional: Add context menu for quick access
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'fillEmailAlias',
    title: 'ملء بإيميل مشتق / Fill with email alias',
    contexts: ['editable']
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === 'fillEmailAlias') {
    const { aliases } = await chrome.storage.sync.get('aliases');
    if (aliases && aliases.length > 0) {
      chrome.tabs.sendMessage(tab.id, {
        action: 'fillEmail',
        email: aliases[0].email
      });
    }
  }
});
