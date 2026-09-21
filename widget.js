(() => {
  'use strict';

  // ==========================================
  // DEVELOPER CONFIGURATION
  // ==========================================
  const CONFIG = {
    isActive: true,               
    testMode: true,               // Set true to bypass timer for testing
    lockHours: 24,                
    tickerText: '+++ SUPPORT DV BIBLE AND HYMNS DEVELOPMENT +++ HELP US SPREAD THE GOSPEL +++',
    mainTitle: 'Support Development',
    subTitle: 'Help Us Keep This App Ad-Free',
    paragraphs: [
      'Thank you for using DV BIBLE AND HYMNS.',
      'We are dedicated to providing a seamless, ad-free experience for studying the word of God.',
      'Your support helps us maintain our systems and release continuous updates.',
      'Please consider reaching out or supporting us through any of the official channels below.',
      'God bless you abundantly for your generosity!'
    ]
  };

  if (!CONFIG.isActive) return;

  const LOCK_KEY = 'dv_support_last_seen';

  // ==========================================
  // 1. NATIVE SIDEBAR INJECTION
  // ==========================================
  const injectSidebarButton = () => {
    // Target your exact sidebar class
    const sidebar = document.querySelector('.sidebar-body');
    if (!sidebar || document.getElementById('dv-sidebar-support-btn')) return;

    const supportItem = document.createElement('div');
    supportItem.id = 'dv-sidebar-support-btn';
    supportItem.className = 'sidebar-item'; // Matches your native item class
    
    // Using a heart SVG that perfectly matches your existing 24x24 outline icon style
    supportItem.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;margin-right:12px;"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>Support Us`;
    
    // Style adjustments to ensure it looks native and clickable
    supportItem.style.cursor = 'pointer';
    
    // Bypasses timer
    supportItem.onclick = () => launchWidget(true);
    
    // Inject at the bottom
    sidebar.appendChild(supportItem);
  };

  // ==========================================
  // 2. FULL-SCREEN MOBILE UI
  // ==========================================
  const launchWidget = (isManualTrigger = false) => {
    const NOW = Date.now();
    const lastSeen = localStorage.getItem(LOCK_KEY);

    if (!CONFIG.testMode && !isManualTrigger && lastSeen) {
      if ((NOW - parseInt(lastSeen, 10)) < (CONFIG.lockHours * 60 * 60 * 1000)) {
        return;
      }
    }

    if (document.getElementById('dv-support-widget-overlay')) return;

    // Master Overlay
    const overlay = document.createElement('div');
    overlay.id = 'dv-support-widget-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:#f8faff;z-index:999999;display:flex;flex-direction:column;opacity:0;transition:opacity 0.3s ease;font-family:system-ui, -apple-system, sans-serif;';

    // CSS Keyframes & Utility Classes
    const style = document.createElement('style');
    // Using the -50% translation trick on a duplicated string creates a perfectly seamless infinite scroll
    style.textContent = `
      @keyframes dvSeamlessTicker { 
        0% { transform: translate3d(0, 0, 0); } 
        100% { transform: translate3d(-50%, 0, 0); } 
      }
      .dv-text-clamp { 
        display: -webkit-box; 
        -webkit-line-clamp: 4; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
      }
    `;
    document.head.appendChild(style);

    // ------------------------------------------
    // FIXED HEADER
    // ------------------------------------------
    const fixedHeader = document.createElement('div');
    fixedHeader.style.cssText = 'flex-shrink:0;background:#f8faff;padding-bottom:16px;box-shadow:0 4px 10px rgba(0,0,0,0.05);z-index:10;';

    // Seamless Ticker
    const tickerWrap = document.createElement('div');
    tickerWrap.style.cssText = 'width:100%;overflow:hidden;background:#002359;color:#fff;padding:16px 0;white-space:nowrap;margin-bottom:16px;display:flex;';
    
    const tickerInner = document.createElement('div');
    tickerInner.style.cssText = 'display:flex;animation:dvSeamlessTicker 20s linear infinite;font-size:18px;font-weight:700;';
    // Duplicate the text to fill the screen twice, eliminating the blank gap
    tickerInner.innerHTML = `<span style="padding-right:50px;">${CONFIG.tickerText}</span><span style="padding-right:50px;">${CONFIG.tickerText}</span>`;
    
    tickerWrap.appendChild(tickerInner);

    // EXIT Button (Top Left)
    const exitWrap = document.createElement('div');
    exitWrap.style.cssText = 'padding:0 16px;display:flex;justify-content:flex-start;';
    
    const exitBtn = document.createElement('button');
    exitBtn.innerHTML = '<strong>&lt; EXIT</strong>';
    exitBtn.style.cssText = 'background:#FFCC00;color:#FF0000;border:none;border-radius:50px;font-size:22px;font-weight:900;padding:12px 32px;cursor:pointer;box-shadow:0 4px 12px rgba(255,204,0,0.4);display:flex;align-items:center;';
    exitWrap.appendChild(exitBtn);

    fixedHeader.appendChild(tickerWrap);
    fixedHeader.appendChild(exitWrap);

    // ------------------------------------------
    // SCROLLABLE BODY
    // ------------------------------------------
    const scrollBody = document.createElement('div');
    scrollBody.style.cssText = 'flex:1;overflow-y:auto;padding:24px 16px;display:flex;flex-direction:column;gap:24px;';

    // Bold Titles Area
    const titlesWrap = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = CONFIG.mainTitle;
    h1.style.cssText = 'font-size:26px;font-weight:900;color:#000;margin:0 0 8px 0;line-height:1.2;';
    
    const h2 = document.createElement('h2');
    h2.textContent = CONFIG.subTitle;
    h2.style.cssText = 'font-size:20px;font-weight:700;color:#b71c1c;margin:0;line-height:1.3;';
    
    titlesWrap.appendChild(h1);
    titlesWrap.appendChild(h2);
    scrollBody.appendChild(titlesWrap);

    // Paragraphs Area (4-line clamp toggle)
    const textContainer = document.createElement('div');
    textContainer.style.cssText = 'font-size:18px;line-height:1.6;color:#333;'; // Strict 18px minimum
    
    const textContent = document.createElement('div');
    textContent.className = 'dv-text-clamp';
    textContent.innerHTML = CONFIG.paragraphs.map(p => `<p style="margin:0 0 12px 0;">${p}</p>`).join('');
    
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'SHOW MORE';
    toggleBtn.style.cssText = 'background:none;border:none;color:#002359;font-size:18px;font-weight:900;padding:8px 0;cursor:pointer;text-decoration:underline;margin-top:4px;';
    
    toggleBtn.onclick = () => {
      if (textContent.classList.contains('dv-text-clamp')) {
        textContent.classList.remove('dv-text-clamp');
        toggleBtn.textContent = 'SHOW LESS';
      } else {
        textContent.classList.add('dv-text-clamp');
        toggleBtn.textContent = 'SHOW MORE';
      }
    };

    textContainer.appendChild(textContent);
    textContainer.appendChild(toggleBtn);
    scrollBody.appendChild(textContainer);

    // Contact Cards Container
    const cardsContainer = document.createElement('div');
    cardsContainer.style.cssText = 'display:flex;flex-direction:column;gap:16px;padding-bottom:40px;';

    const svgVerified = '<svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

    const buildCard = (iconSvg, titleText, subText, url) => {
      const card = document.createElement('a');
      card.href = url;
      card.target = '_blank';
      card.style.cssText = 'background:#002359;border-left:12px solid #b71c1c;border-radius:12px;padding:20px 16px;display:flex;align-items:center;gap:16px;text-decoration:none;box-shadow:0 6px 15px rgba(0,35,89,0.15);';

      const iconWrap = document.createElement('div');
      iconWrap.style.cssText = 'width:64px;height:64px;flex-shrink:0;display:flex;align-items:center;justify-content:center;';
      iconWrap.innerHTML = iconSvg;

      const textCol = document.createElement('div');
      textCol.style.cssText = 'display:flex;flex-direction:column;gap:4px;';
      
      const titleRow = document.createElement('div');
      titleRow.style.cssText = 'display:flex;align-items:center;gap:8px;color:#fff;font-size:22px;font-weight:900;';
      titleRow.innerHTML = `<span>${titleText}</span> ${svgVerified}`;
      
      const sub = document.createElement('div');
      sub.style.cssText = 'color:#a3b8d7;font-size:18px;line-height:1.4;'; 
      sub.textContent = subText;

      textCol.appendChild(titleRow);
      textCol.appendChild(sub);
      card.appendChild(iconWrap);
      card.appendChild(textCol);

      return card;
    };

    // Corrected WhatsApp Icon
    const svgWA = '<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="#25D366"/><path d="M32,14 C22.05,14 14,22.05 14,32 C14,36 15.2,39.7 17.4,42.8 L14,50 L21.2,46.6 C24.3,48.8 28,50 32,50 C41.95,50 50,41.95 50,32 C50,22.05 41.95,14 32,14 Z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M25,25 c-2,0 -4,1.5 -4,3.5 c0,8 6.5,14.5 14.5,14.5 c2,0 3.5,-2 3.5,-4 c0,-1 -1,-2.5 -2.5,-3.5 c-1.5,-1 -3,-0.5 -4,0.5 l-1.5,1.5 c-2.5,-1.5 -4,-3 -5.5,-5.5 l1.5,-1.5 c1,-1 1.5,-2.5 0.5,-4 c-1,-1.5 -2.5,-2.5 -3.5,-2.5 Z" fill="#fff"/><path d="M48,16 v12 M42,22 h12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></svg>';
    
    // Standard Contact Icons
    const makeIcon = (bg, path) => `<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="${bg}"/><g transform="translate(16, 16) scale(1.33)"><path d="${path}" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;
    
    const svgFB = `<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="#1877f2"/><g transform="translate(16, 16) scale(1.33)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;
    const svgEmail = makeIcon('#ea4335', 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6');
    const svgPhone = makeIcon('#29b6f6', 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z');

    cardsContainer.appendChild(buildCard(svgWA, 'PLACEHOLDER NAME', 'Chat with us directly on WhatsApp.', 'https://wa.me/'));
    cardsContainer.appendChild(buildCard(svgFB, 'PLACEHOLDER NAME', 'Follow our official Facebook page.', 'https://facebook.com/'));
    cardsContainer.appendChild(buildCard(svgEmail, 'PLACEHOLDER NAME', 'Send us a direct email inquiry.', 'mailto:example@gmail.com'));
    cardsContainer.appendChild(buildCard(svgPhone, 'PLACEHOLDER NAME', 'Call our official mobile line.', 'tel:+1234567890'));

    scrollBody.appendChild(cardsContainer);
    
    // Assembly
    overlay.appendChild(fixedHeader);
    overlay.appendChild(scrollBody);
    document.body.appendChild(overlay);

    // Dismiss Logic
    exitBtn.onclick = () => {
      if (!CONFIG.testMode) localStorage.setItem(LOCK_KEY, Date.now().toString());
      overlay.style.opacity = '0';
      setTimeout(() => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        if (style.parentNode) style.parentNode.removeChild(style);
      }, 300);
    };

    // Entrance Animation
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });
  };

  // Safe Initialization
  const init = () => {
    injectSidebarButton();
    launchWidget();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();