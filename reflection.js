
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
      author: 'Pastor John Doe'
    }
  };

  if (!CONFIG.isActive) return;

  // ==========================================
  // 1. QUICK ACTIONS BUTTON INJECTION
  // ==========================================
  const injectReflectionButton = () => {
    const qaContainer = document.querySelector('.quick-actions');
    if (!qaContainer || document.getElementById('dv-qa-reflection')) return;

    const btn = document.createElement('button');
    btn.id = 'dv-qa-reflection';
    btn.className = 'qa-btn';
    btn.innerHTML = `${CONFIG.buttonIcon}<span>${CONFIG.buttonText}</span>`;
    
    btn.onclick = openReflectionModal;
    qaContainer.appendChild(btn);
  };

  // ==========================================
  // 2. EDGE-TO-EDGE MODAL BUILDER (100dvh/100dvw)
  // ==========================================
  const openReflectionModal = () => {
    if (document.getElementById('dv-reflection-modal')) return;

    // Master Overlay (Strictly 100dvh, 100dvw edge-to-edge)
    const modal = document.createElement('div');
    modal.id = 'dv-reflection-modal';
    modal.style.cssText = `position:fixed;top:0;left:0;width:100dvw;height:100dvh;background:${CONFIG.styles.modalBg};z-index:999999;display:flex;flex-direction:column;opacity:0;transition:opacity 0.3s ease;font-family:system-ui, -apple-system, sans-serif;`;

    // Fixed Top Bar with Close Button
    const topBar = document.createElement('div');
    topBar.style.cssText = 'flex-shrink:0;padding:16px;display:flex;justify-content:flex-end;box-shadow:0 2px 5px rgba(0,0,0,0.05);background:inherit;';
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = 'background:none;border:none;font-size:36px;color:#333;cursor:pointer;line-height:1;padding:8px;';
    closeBtn.onclick = () => {
      modal.style.opacity = '0';
      setTimeout(() => modal.parentNode && modal.parentNode.removeChild(modal), 300);
    };
    topBar.appendChild(closeBtn);

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

    // Construct UI elements mapping strictly to configuration styles
    const title = buildText('div', CONFIG.content.title, `font-size:${CONFIG.styles.titleSize};color:${CONFIG.styles.titleColor};font-weight:bold;margin-bottom:4px;`);
    const subtitle = buildText('div', CONFIG.content.subtitle, `font-size:${CONFIG.styles.subtitleSize};color:${CONFIG.styles.subtitleColor};font-weight:bold;`);
    
    const referenceWrap = document.createElement('div');
    referenceWrap.style.cssText = 'margin-top:12px;padding:16px;background:rgba(0,0,0,0.03);border-radius:12px;border-left:6px solid ' + CONFIG.styles.verseColor + ';';
    
    const reference = buildText('div', CONFIG.content.reference, `font-size:${CONFIG.styles.refSize};color:${CONFIG.styles.refColor};font-weight:bold;margin-bottom:8px;`);
    const verse = buildText('div', CONFIG.content.verse, `font-size:${CONFIG.styles.verseSize};color:${CONFIG.styles.verseColor};font-style:italic;line-height:1.5;`);
    
    referenceWrap.appendChild(reference);
    referenceWrap.appendChild(verse);

    const bodyText = buildText('div', CONFIG.content.body, `font-size:${CONFIG.styles.bodySize};color:${CONFIG.styles.bodyColor};text-align:left;line-height:1.6;margin-top:8px;`);
    const author = buildText('div', `- ${CONFIG.content.author}`, `font-size:${CONFIG.styles.authorSize};color:${CONFIG.styles.authorColor};font-weight:bold;text-align:left;margin-top:12px;`);

    // Assembly
    scrollBody.appendChild(title);
    scrollBody.appendChild(subtitle);
    scrollBody.appendChild(referenceWrap);
    scrollBody.appendChild(bodyText);
    scrollBody.appendChild(author);

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
