
(function() {
  var startX = 0;
  var startY = 0;

  document.addEventListener('touchstart', function(e) {
    startX = e.changedTouches[0].screenX;
    startY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    var shell = document.getElementById('dvbShell');
    if (!shell || !shell.classList.contains('dvb-open')) return;

    var endX = e.changedTouches[0].screenX;
    var endY = e.changedTouches[0].screenY;
    
    var dx = endX - startX;
    var dy = endY - startY;
    
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      try {
        if (dx < 0 && typeof dvbNavNext === 'function') dvbNavNext();
        if (dx > 0 && typeof dvbNavPrev === 'function') dvbNavPrev();
      } catch (err) {}
    }
  }, { passive: true });
})();
