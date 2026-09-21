(() => {
  'use strict';

  // ==========================================
  // DEVELOPER CONFIGURATION
  // ==========================================
  const CONFIG = {
    isActive: true,               // Master switch to enable/disable the widget
    testMode: true,               // Set true to bypass the 24-hour timer for testing
    lockHours: 24,                // Lock duration in hours
    sidebarSelector: '.dv-sidebar-body', // CSS class of your sidebar container
    tickerText: '+++ SUPPORT DV BIBLE AND HYMNS DEVELOPMENT +++ HELP US SPREAD THE GOSPEL +++',
    paragraphs: [
      'Thank you for using DV BIBLE AND HYMNS.',
      'We are dedicated to providing a seamless, ad-free experience for studying the word of God.',
      'Your support helps us maintain our systems and release continuous updates.',
      'Please consider reaching out or supporting us through any of the official channels below. God bless you abundantly for your generosity!'
    ]
  };

  if (!CONFIG.isActive) return;

  const LOCK_KEY = 'dv_support_last_seen';
  
  // ==========================================
  // 1. SIDEBAR BUTTON AUTO-INJECTION
  // ==========================================
  const injectSidebarButton = () => {
    const sidebar = document.querySelector(CONFIG.sidebarSelector);
    if (!sidebar) return; // Failsafe if sidebar isn't found

    const supportBtn = document.createElement('button');
    supportBtn.textContent = 'Support Us';
    supportBtn.style.cssText = 'width:100%;text-align:left;font-size:18px;padding:16px;background:transparent;border:none;color:inherit;cursor:pointer;font-weight:700;margin-top:auto;font-family:inherit;';
    
    // Sidebar trigger bypasses the timer
    supportBtn.onclick = () => launchWidget(true);
    sidebar.appendChild(supportBtn);
  };

  // ==========================================
  // 2. WIDGET UI BUILDER (Full-Screen Mobile)
  // ==========================================
  const launchWidget = (isManualTrigger = false) => {
    const NOW = Date.now();
    const lastSeen = localStorage.getItem(LOCK_KEY);

    // Enforce 24-hour lock only if not in test mode AND not manually triggered from sidebar
    if (!CONFIG.testMode && !isManualTrigger && lastSeen) {
      if ((NOW - parseInt(lastSeen, 10)) < (CONFIG.lockHours * 60 * 60 * 1000)) {
        return;
      }
    }

    // Prevents multiple widget instances
    if (document.getElementById('dv-support-widget-overlay')) return;

    // Master Overlay (Flex container to separate fixed header from scrollable body)
    const overlay = document.createElement('div');
    overlay.id = 'dv-support-widget-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:#f8faff;z-index:999999;display:flex;flex-direction:column;opacity:0;transition:opacity 0.3s ease;font-family:system-ui, -apple-system, sans-serif;';

    // ------------------------------------------
    // FIXED HEADER (Never Moves)
    // ------------------------------------------
    const fixedHeader = document.createElement('div');
    fixedHeader.style.cssText = 'flex-shrink:0;background:#f8faff;padding-bottom:16px;box-shadow:0 4px 10px rgba(0,0,0,0.05);z-index:10;';

    // CSS Keyframes for Ticker inserted dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes dvTicker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
      .dv-clamp { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
    `;
    document.head.appendChild(style);

    // Scrolling Ticker
    const tickerWrap = document.createElement('div');
    tickerWrap.style.cssText = 'width:100%;overflow:hidden;background:#002359;color:#fff;padding:12px 0;white-space:nowrap;margin-bottom:16px;';
    const tickerText = document.createElement('div');
    tickerText.textContent = CONFIG.tickerText;
    tickerText.style.cssText = 'display:inline-block;font-size:18px;font-weight:700;animation:dvTicker 15s linear infinite;';
    tickerWrap.appendChild(tickerText);

    // Yellow/Red EXIT Button
    const exitWrap = document.createElement('div');
    exitWrap.style.cssText = 'padding:0 16px;display:flex;';
    const exitBtn = document.createElement('button');
    exitBtn.innerHTML = '<strong>&lt; EXIT</strong>';
    exitBtn.style.cssText = 'background:#FFCC00;color:#FF0000;border:none;border-radius:50px;font-size:22px;font-weight:900;padding:12px 32px;cursor:pointer;box-shadow:0 4px 12px rgba(255,204,0,0.4);display:flex;align-items:center;gap:8px;';
    exitWrap.appendChild(exitBtn);

    fixedHeader.appendChild(tickerWrap);
    fixedHeader.appendChild(exitWrap);

    // ------------------------------------------
    // SCROLLABLE BODY
    // ------------------------------------------
    const scrollBody = document.createElement('div');
    scrollBody.style.cssText = 'flex:1;overflow-y:auto;padding:24px 16px;display:flex;flex-direction:column;gap:24px;';

    // Flexible Text Area
    const textContainer = document.createElement('div');
    textContainer.style.cssText = 'font-size:18px;line-height:1.6;color:#333;';
    
    const textContent = document.createElement('div');
    textContent.className = 'dv-clamp'; // Applies the 4-line limit initially
    textContent.innerHTML = CONFIG.paragraphs.map(p => `<p style="margin:0 0 12px 0;">${p}</p>`).join('');
    
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'SHOW MORE';
    toggleBtn.style.cssText = 'background:none;border:none;color:#002359;font-size:18px;font-weight:900;padding:8px 0;cursor:pointer;text-decoration:underline;margin-top:4px;';
    
    toggleBtn.onclick = () => {
      if (textContent.classList.contains('dv-clamp')) {
        textContent.classList.remove('dv-clamp');
        toggleBtn.textContent = 'SHOW LESS';
      } else {
        textContent.classList.add('dv-clamp');
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
      iconWrap.style.cssText = 'width:64px;height:64px;flex-shrink:0;';
      iconWrap.innerHTML = iconSvg;

      const textCol = document.createElement('div');
      textCol.style.cssText = 'display:flex;flex-direction:column;gap:4px;';
      
      const titleRow = document.createElement('div');
      titleRow.style.cssText = 'display:flex;align-items:center;gap:8px;color:#fff;font-size:22px;font-weight:900;';
      titleRow.innerHTML = `<span>${titleText}</span> ${svgVerified}`;
      
      const sub = document.createElement('div');
      sub.style.cssText = 'color:#a3b8d7;font-size:18px;line-height:1.4;'; // Strict 18px
      sub.textContent = subText;

      textCol.appendChild(titleRow);
      textCol.appendChild(sub);
      card.appendChild(iconWrap);
      card.appendChild(textCol);

      return card;
    };

    // Custom SVGs
    // WhatsApp: Pure green circle, white outline bubble, white receiver, white + symbol
    const svgWA = '<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="#25D366"/><path d="M32,14 C22.05,14 14,22.05 14,32 C14,36 15.2,39.7 17.4,42.8 L14,50 L21.2,46.6 C24.3,48.8 28,50 32,50 C41.95,50 50,41.95 50,32 C50,22.05 41.95,14 32,14 Z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M25,25 c-2,0 -4,1.5 -4,3.5 c0,8 6.5,14.5 14.5,14.5 c2,0 3.5,-2 3.5,-4 c0,-1 -1,-2.5 -2.5,-3.5 c-1.5,-1 -3,-0.5 -4,0.5 l-1.5,1.5 c-2.5,-1.5 -4,-3 -5.5,-5.5 l1.5,-1.5 c1,-1 1.5,-2.5 0.5,-4 c-1,-1.5 -2.5,-2.5 -3.5,-2.5 Z" fill="#fff"/><path d="M48,16 v12 M42,22 h12" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></svg>';
    
    // Standard Contact Icons scaled inside a circle wrapper
    const makeIcon = (bg, path) => `<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="${bg}"/><g transform="translate(16, 16) scale(1.33)"><path d="${path}" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;
    
    const svgFB = `<svg viewBox="0 0 64 64" width="64" height="64"><circle cx="32" cy="32" r="32" fill="#1877f2"/><g transform="translate(16, 16) scale(1.33)"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;
    const svgEmail = makeIcon('#ea4335', 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6');
    const svgPhone = makeIcon('#29b6f6', 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z');

    // Build the 4 requested cards
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

    // Trigger Entrance Animation
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });
  };

  // Run initializations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      injectSidebarButton();
      launchWidget();
    });
  } else {
    injectSidebarButton();
    launchWidget();
  }

})();