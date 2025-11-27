// Content script to inject email into input fields
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'fillEmail') {
    const emailInputs = document.querySelectorAll(
      'input[type="email"], input[name*="email" i], input[id*="email" i], input[placeholder*="email" i]'
    );
    
    if (emailInputs.length > 0) {
      for (const input of emailInputs) {
        if (input.offsetParent !== null && !input.disabled) {
          input.value = request.email;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
          input.focus();
          break;
        }
      }
    }
  }
});
