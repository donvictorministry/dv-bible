
(() => {
  'use strict';

  // ==========================================
  // DEVELOPER CMS & STYLE CONFIGURATION
  // Edit these values daily to update the app.
  // ==========================================
  const CONFIG = {
    isActive: true,

    // Button Settings
    buttonText: 'Reflection',
    // SVG icon representing a sunrise/sparkle for daily reflection
    buttonIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M5 5l1.5 1.5"/><path d="M17.5 17.5L19 19"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M5 19l1.5-1.5"/><path d="M17.5 6.5L19 5"/></svg>',

    // Styling Rules (Strict Hex codes, editable baselines)
    styles: {
      modalBg: '#f8faff',
      
      titleSize: '26px',
      titleColor: '#002359', // Dark Blue
      
      subtitleSize: '24px',
      subtitleColor: '#4b5563', // Dark Gray
      
      refSize: '22px',
      refColor: '#0056b3', // Royal Blue
      
      verseSize: '22px',
      verseColor: '#FF0000', // Red (per instructions)
      
      bodySize: '22px',
      bodyColor: '#000000', // Black
      
      authorSize: '24px',
      authorColor: '#000000' // Black
    },

    // App URL for Sharing
    appUrl: 'https://donvictorministry.github.io/dv-bible/',

    // Daily Seed Data (Placeholders)
    content: {
      title: 'MORNING REFLECTION',
      subtitle: 'Finding Peace in the Storm',
      reference: 'Philippians 4:6-7',
      verse: '"Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus."',
      body: [
        'In our daily lives, it is easy to become overwhelmed by the storms that surround us. Anxiety creeps in when we try to carry the weight of the world on our own shoulders.',
        'But God calls us to a different response. He asks us to trade our heavy burdens for His perfect peace through the simple act of prayer and thanksgiving.',
        'Today, whatever you are facing, bring it to Him. Speak your worries out loud, thank Him for His past faithfulness, and watch as His peace guards your heart.'
      ],
      author: 'Pastor John Doe',
      phone: 'tel:+1234567890',
      whatsapp: 'https://wa.me/1234567890',
      email: 'mailto:example@gmail.com'
    }
  };

    if (!CONFIG.isActive) return;
  // ==========================================
  // STREAK & TIMING LOGIC
  // ==========================================
  const LAST_OPENED_KEY = 'dv_reflection_last_opened';
  const STREAK_KEY = 'dv_reflection_streak';

  const handleStreakUpdate = () => {
    const now = Date.now();
    const lastOpened = parseInt(localStorage.getItem(LAST_OPENED_KEY) || '0', 10);
    let streak = parseInt(localStorage.getItem(STREAK_KEY) || '0', 10);

    if (lastOpened === 0) {
      streak = 1;
    } else {
      const hoursSince = (now - lastOpened) / (1000 * 60 * 60);
      if (hoursSince > 48) {
        streak = 1; // Broke streak
      } else if (hoursSince >= 24) {
        streak += 1; // Next day increment
      }
    }
    
    localStorage.setItem(LAST_OPENED_KEY, now.toString());
    localStorage.setItem(STREAK_KEY, streak.toString());
    return streak;
  };

  // Inject CSS Keyframes and Clamp Utility
  const style = document.createElement('style');
  style.textContent = `
    @keyframes dvBlink { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0.3; transform: scale(0.9); } }
    .dv-reflection-clamp { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
  `;
  document.head.appendChild(style);

  // ==========================================
  // 1. QUICK ACTIONS BUTTON INJECTION
  // ==========================================
  const injectReflectionButton = () => {
    const qaContainer = document.querySelector('.quick-actions');
    if (!qaContainer || document.getElementById('dv-qa-reflection')) return;

    const btn = document.createElement('button');
    btn.id = 'dv-qa-reflection';
    btn.className = 'qa-btn';
    btn.style.position = 'relative';
    
    const envelopeIcon = `<svg id="dv-reflection-badge" viewBox="0 0 24 24" fill="#FF0000" style="position:absolute;top:-8px;right:-8px;width:30px;height:30px;animation:dvBlink 0.8s infinite alternate;z-index:2;"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"/></svg>`;
    
    btn.innerHTML = `${envelopeIcon}${CONFIG.buttonIcon}<span>${CONFIG.buttonText}</span>`;
    
    btn.onclick = openReflectionModal;
    qaContainer.appendChild(btn);
  };

  // ==========================================
  // 2. EDGE-TO-EDGE MODAL BUILDER (100dvh/100dvw)
  // ==========================================
  const openReflectionModal = () => {
    if (document.getElementById('dv-reflection-modal')) return;

    // Generate Streak and Share Text on open
    const streakNum = handleStreakUpdate();
    const shareText = `"${CONFIG.content.subtitle}" - ${CONFIG.content.reference}\n\nRead today's reflection on DV Bible and Hymns app: ${CONFIG.appUrl}`;
    // Master Overlay (Uses inherit to natively adopt your app's Dark/Light mode engine)
    const modal = document.createElement('div');
    modal.id = 'dv-reflection-modal';
    // Inherits background and text colors globally
    modal.style.cssText = `position:fixed;top:0;left:0;width:100dvw;height:100dvh;background:var(--bg-color, inherit);color:var(--text-color, inherit);z-index:999999;display:flex;flex-direction:column;opacity:0;transition:opacity 0.3s ease;font-family:inherit;`;

      // Remove the blinking envelope upon opening
    const badge = document.getElementById('dv-reflection-badge');
    if (badge) badge.remove();

    // Fixed Top Bar with Native Back Arrow and Centered Title
    const topBar = document.createElement('div');
    topBar.style.cssText = 'flex-shrink:0;height:64px;display:flex;align-items:center;justify-content:center;position:relative;background:#1877f2;box-shadow:0 2px 4px rgba(0,0,0,0.1);';
    
    const headerTitle = document.createElement('div');
    headerTitle.textContent = 'REFLECTION';
    headerTitle.style.cssText = 'color:#ffffff;font-size:22px;font-weight:bold;letter-spacing:0.5px;';
    
    const closeBtn = document.createElement('button');
    // Thick SVG chevron matching your exact screenshot
    closeBtn.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M15 18l-6-6 6-6"/></svg>';
    closeBtn.style.cssText = 'position:absolute;left:4px;background:none;border:none;cursor:pointer;padding:12px;display:flex;align-items:center;justify-content:center;';
    
    closeBtn.onclick = () => {
      modal.style.opacity = '0';
      setTimeout(() => modal.parentNode && modal.parentNode.removeChild(modal), 300);
    };
    
    topBar.appendChild(closeBtn);
    topBar.appendChild(headerTitle);
  
    // Scrollable Content Container
    const scrollBody = document.createElement('div');
    scrollBody.style.cssText = 'flex:1;overflow-y:auto;padding:24px 16px;display:flex;flex-direction:column;gap:20px;';

    // Helper to build text elements dynamically via config
    const buildText = (tag, content, cssRules) => {
      const el = document.createElement(tag);
      if (Array.isArray(content)) {
        el.innerHTML = content.map(p => `<p style="margin:0 0 16px 0;">${p}</p>`).join('');
      } else {
        el.textContent = content;
      }
      el.style.cssText = cssRules;
      return el;
    };

    // Streak UI Badge
    const streakBadge = document.createElement('div');
    streakBadge.style.cssText = 'background:rgba(255, 69, 0, 0.1);color:#ff4500;padding:6px 16px;border-radius:20px;font-weight:bold;font-size:16px;display:inline-block;align-self:flex-start;margin-bottom:8px;';
    streakBadge.textContent = `🔥 ${streakNum} Day Streak`;

    // Construct UI elements (Title is now in the header)
    // Stripping hardcoded color so it respects Dark Mode text rules
    const subtitle = buildText('div', CONFIG.content.subtitle, `font-size:${CONFIG.styles.subtitleSize};color:inherit;font-weight:bold;`);
    
    const referenceWrap = document.createElement('div');
    referenceWrap.style.cssText = 'margin-top:12px;padding:16px;background:rgba(0,0,0,0.03);border-radius:12px;border-left:6px solid ' + CONFIG.styles.verseColor + ';';
    
    const reference = buildText('div', CONFIG.content.reference, `font-size:${CONFIG.styles.refSize};color:${CONFIG.styles.refColor};font-weight:bold;margin-bottom:8px;`);
    const verse = buildText('div', CONFIG.content.verse, `font-size:${CONFIG.styles.verseSize};color:${CONFIG.styles.verseColor};font-style:italic;line-height:1.5;`);
    
    referenceWrap.appendChild(reference);
    referenceWrap.appendChild(verse);

    // Body Text with Clamp, Gray Background, and Facebook Blue Left Border
    const bodyContainer = document.createElement('div');
    // Using an alpha channel for gray (rgba) ensures it looks good in both Dark and Light modes
    bodyContainer.style.cssText = 'margin-top:12px;padding:16px;background:rgba(128,128,128,0.1);border-radius:12px;border-left:6px solid #1877f2;';
    
    // Stripping hardcoded bodyColor for Dark Mode inheritance
    const bodyText = buildText('div', CONFIG.content.body, `font-size:${CONFIG.styles.bodySize};color:inherit;text-align:left;line-height:1.6;`);
    bodyText.className = 'dv-reflection-clamp';
    
    const showMoreBtn = document.createElement('button');
    showMoreBtn.textContent = 'SHOW MORE';
    showMoreBtn.style.cssText = 'background:none;border:none;color:#0056b3;font-size:18px;font-weight:900;padding:8px 0;cursor:pointer;text-decoration:underline;margin-top:4px;text-align:left;display:block;';
    
    showMoreBtn.onclick = () => {
      if (bodyText.classList.contains('dv-reflection-clamp')) {
        bodyText.classList.remove('dv-reflection-clamp');
        showMoreBtn.textContent = 'SHOW LESS';
      } else {
        bodyText.classList.add('dv-reflection-clamp');
        showMoreBtn.textContent = 'SHOW MORE';
      }
    };

    bodyContainer.appendChild(bodyText);
    bodyContainer.appendChild(showMoreBtn);

    // Counseling & Prayer Links
    const counselingWrap = document.createElement('div');
    counselingWrap.style.cssText = `font-size:${CONFIG.styles.bodySize};color:${CONFIG.styles.bodyColor};text-align:left;margin-top:16px;line-height:1.6;`;
    
    counselingWrap.innerHTML = `
      <div style="margin-bottom:8px;">For personal prayers and counseling:</div>
      <a href="${CONFIG.content.phone}" style="color:#1877f2;text-decoration:underline;font-style:italic;font-weight:bold;">Call</a>, 
      <a href="${CONFIG.content.whatsapp}" style="color:#1877f2;text-decoration:underline;font-style:italic;font-weight:bold;">Chat on WhatsApp</a>, 
      <a href="${CONFIG.content.email}" style="color:#1877f2;text-decoration:underline;font-style:italic;font-weight:bold;">Email</a>
    `;

    // Stripping hardcoded authorColor for Dark Mode inheritance
    const author = buildText('div', `- ${CONFIG.content.author}`, `font-size:${CONFIG.styles.authorSize};color:inherit;font-weight:bold;text-align:left;margin-top:24px;`);

    // Share Buttons Row (Exact match to Daily Verse)
    const shareContainer = document.createElement('div');
    shareContainer.style.cssText = 'display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-top:32px;padding-bottom:32px;border-bottom:1px solid rgba(128,128,128,0.2);width:100%;';

    const buildShareBtn = (bg, svg, action) => {
      const btn = document.createElement('button');
      btn.style.cssText = `width:56px;height:56px;border-radius:50%;background:${bg};border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 10px rgba(0,0,0,0.15);flex-shrink:0;`;
      btn.innerHTML = svg;
      btn.onclick = action;
      return btn;
    };

    const svgCopy = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
    const svgWA = '<svg width="28" height="28" viewBox="0 0 64 64"><path d="M32,14 C22.05,14 14,22.05 14,32 C14,36 15.2,39.7 17.4,42.8 L14,50 L21.2,46.6 C24.3,48.8 28,50 32,50 C41.95,50 50,41.95 50,32 C50,22.05 41.95,14 32,14 Z" fill="none" stroke="#fff" stroke-width="4"/><path d="M25,25 c-2,0 -4,1.5 -4,3.5 c0,8 6.5,14.5 14.5,14.5 c2,0 3.5,-2 3.5,-4 c0,-1 -1,-2.5 -2.5,-3.5 c-1.5,-1 -3,-0.5 -4,0.5 l-1.5,1.5 c-2.5,-1.5 -4,-3 -5.5,-5.5 l1.5,-1.5 c1,-1 1.5,-2.5 0.5,-4 c-1,-1.5 -2.5,-2.5 -3.5,-2.5 Z" fill="#fff"/></svg>';
    const svgFB = '<svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>';
    const svgX = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M4 4l16 16M4 20L20 4"/></svg>';
    const svgTG = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
    const svgNative = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

    shareContainer.appendChild(buildShareBtn('#607d8b', svgCopy, () => {
      navigator.clipboard.writeText(shareText).then(() => {
        const toast = document.createElement('div');
        toast.textContent = 'Copied to clipboard!';
        toast.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:rgba(0,0,0,0.85);color:#fff;padding:14px 28px;border-radius:30px;font-size:16px;font-weight:bold;z-index:9999999;opacity:0;transition:opacity 0.3s ease;pointer-events:none;';
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.style.opacity = '1');
        setTimeout(() => {
          toast.style.opacity = '0';
          setTimeout(() => toast.remove(), 300);
        }, 2000);
      });
    }));
    shareContainer.appendChild(buildShareBtn('#25D366', svgWA, () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`)));
    shareContainer.appendChild(buildShareBtn('#1877f2', svgFB, () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`)));
    shareContainer.appendChild(buildShareBtn('#000000', svgX, () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`)));
    shareContainer.appendChild(buildShareBtn('#0088cc', svgTG, () => window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(shareText)}`)));
    
    if (navigator.share) {
      shareContainer.appendChild(buildShareBtn('#ff5722', svgNative, () => navigator.share({ title: 'Daily Reflection', text: shareText })));
    }

    // Assembly
    scrollBody.appendChild(streakBadge);
    scrollBody.appendChild(subtitle);
    scrollBody.appendChild(referenceWrap);
    scrollBody.appendChild(bodyContainer);
    scrollBody.appendChild(author);
    scrollBody.appendChild(shareContainer);
    scrollBody.appendChild(counselingWrap);

    modal.appendChild(topBar);
    modal.appendChild(scrollBody);
    document.body.appendChild(modal);

    // Trigger entrance animation
    requestAnimationFrame(() => {
      modal.style.opacity = '1';
    });
  };

  // Safe Initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectReflectionButton);
  } else {
    injectReflectionButton();
  }

})();