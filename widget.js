
(() => {
  'use strict';

  // ==========================================
  // DEVELOPER CONFIGURATION
  // ==========================================
  const CONFIG = {
    isActive: true,       // Set to false to turn off the widget completely
    testMode: true,       // Set to true to bypass the lock timer for testing
    lockHours: 24         // Hours to wait before showing again after dismissal
  };

  if (!CONFIG.isActive) return;

  const LOCK_KEY = 'dv_support_last_seen';
  const NOW = Date.now();
  const lastSeen = localStorage.getItem(LOCK_KEY);

  // Abort if not in test mode and the time lock is still active
  if (!CONFIG.testMode && lastSeen && (NOW - parseInt(lastSeen, 10)) < (CONFIG.lockHours * 60 * 60 * 1000)) {
    return;
  }

  // ==========================================
  // FULL-SCREEN UI BUILDER (Android Focus)
  // ==========================================
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:#f8faff;z-index:999999;display:flex;flex-direction:column;opacity:0;transition:opacity 0.3s ease;overflow-y:auto;padding:24px 16px;box-sizing:border-box;font-family:system-ui, -apple-system, sans-serif;';

  // Top Bar (Close Button)
  const topBar = document.createElement('div');
  topBar.style.cssText = 'display:flex;justify-content:flex-end;margin-bottom:16px;';
  
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = 'background:none;border:none;font-size:42px;color:#333;cursor:pointer;line-height:1;padding:8px;';
  topBar.appendChild(closeBtn);

  // Header Text
  const headerWrap = document.createElement('div');
  headerWrap.style.cssText = 'text-align:center;margin-bottom:32px;';
  
  const title = document.createElement('h2');
  title.textContent = 'Support Development';
  title.style.cssText = 'margin:0 0 16px;font-size:28px;font-weight:900;color:#000;';
  
  const desc = document.createElement('p');
  desc.innerHTML = 'Thank you for using DV BIBLE AND HYMNS. Support the developer to help us release updates. God bless you.';
  desc.style.cssText = 'margin:0;font-size:18px;line-height:1.5;color:#4b5563;'; // Strict 18px minimum
  
  headerWrap.appendChild(title);
  headerWrap.appendChild(desc);

  // Cards Container
  const cardsContainer = document.createElement('div');
  cardsContainer.style.cssText = 'display:flex;flex-direction:column;gap:20px;padding-bottom:40px;';

  // Verified SVG Badge
  const svgVerified = '<svg width="22" height="22" viewBox="0 0 24 24" fill="#4285F4" style="flex-shrink:0;margin-top:2px;"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

  // Rich Card Builder (No pills, exact layout)
  const buildRichCard = (iconSvg, iconBg, titleText, subText, url) => {
    const card = document.createElement('a');
    card.href = url;
    card.target = '_blank';
    card.style.cssText = 'background:#002359;border-left:10px solid #b71c1c;border-radius:12px;padding:24px 16px;display:flex;align-items:center;gap:18px;text-decoration:none;box-shadow:0 8px 20px rgba(0,35,89,0.15);';

    // Left Icon
    const iconCircle = document.createElement('div');
    iconCircle.style.cssText = `width:64px;height:64px;border-radius:50%;background:${iconBg};display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;box-shadow:0 4px 10px rgba(0,0,0,0.2);`;
    iconCircle.innerHTML = iconSvg;

    // Right Text Column
    const textCol = document.createElement('div');
    textCol.style.cssText = 'display:flex;flex-direction:column;gap:6px;';
    
    const titleRow = document.createElement('div');
    titleRow.style.cssText = 'display:flex;align-items:flex-start;gap:6px;color:#fff;font-size:22px;font-weight:800;letter-spacing:0.5px;line-height:1.2;';
    titleRow.innerHTML = `<span>${titleText}</span> ${svgVerified}`;
    
    const sub = document.createElement('div');
    sub.style.cssText = 'color:#a3b8d7;font-size:18px;line-height:1.4;'; // Strict 18px minimum
    sub.textContent = subText;

    textCol.appendChild(titleRow);
    textCol.appendChild(sub);
    card.appendChild(iconCircle);
    card.appendChild(textCol);

    return card;
  };

  // SVGs for Icons
  const svgWA = '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>';
  const svgEmail = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>';
  const svgPhone = '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';

  // Append Cards
  cardsContainer.appendChild(buildRichCard(svgWA, '#25D366', 'PLACEHOLDER NAME', 'Get our top curated updates directly.', 'https://wa.me/'));
  cardsContainer.appendChild(buildRichCard(svgEmail, '#ea4335', 'PLACEHOLDER NAME', 'Send inquiries via direct email.', 'mailto:example@gmail.com'));
  cardsContainer.appendChild(buildRichCard(svgPhone, '#29b6f6', 'PLACEHOLDER NAME', 'Call our official mobile line.', 'tel:+1234567890'));

  // Assembly
  overlay.appendChild(topBar);
  overlay.appendChild(headerWrap);
  overlay.appendChild(cardsContainer);

  // Dismiss Logic
  const dismissWidget = () => {
    localStorage.setItem(LOCK_KEY, Date.now().toString());
    overlay.style.opacity = '0';
    setTimeout(() => {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }, 300);
  };

  closeBtn.onclick = dismissWidget;

  // Inject into DOM
  document.body.appendChild(overlay);

  // Trigger animation
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
  });

})();






