

<!-- WARNING: PROPRIETARY DV ARCHITECTURE. DO NOT CLONE.     -->
<div id="dvUniversalUpdateModal" style="display:none; position:fixed; inset:0; z-index:9999999; background:rgba(255,255,255,0.9); backdrop-filter:blur(4px); align-items:center; justify-content:center; padding:20px; font-family: Roboto, 'Segoe UI', Arial, sans-serif;">
  <div style="position:relative; width:100%; max-width:340px; text-align:center; padding:28px 24px; margin:0 auto; background:#FFFFFF; border:1px solid #E5E7EB; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.08); overflow:hidden;">
    <div style="font-size:1.45rem; font-weight:800; color:#1877F2; margin-bottom:12px;">Notice</div>
    <div style="font-size:1.1rem; color:#050505; margin-bottom:24px; line-height:1.5;">There's a new version, update to use the latest features.</div>
    <button id="dvUniversalUpdateOkayBtn" style="width:100%; padding:14px; background:#1877F2; color:#fff; border:none; border-radius:13px; font-size:1.1rem; font-weight:700; cursor:pointer; box-shadow:0 4px 12px rgba(24,119,242,0.3);">Ok</button>
    <div style="position:absolute; bottom:6px; right:10px; font-size:0.65rem; font-weight:700; color:rgba(0,0,0,0.08); user-select:none; pointer-events:none;">DON VICTOR MINISTRIES'</div>
  </div>
</div>

(function() {
  var DV_APP_VERSION = "1.2";
  var DV_STORAGE_KEY = "dv_hymns_app_version";
  console.log("%cProtected by DV Architecture", "color:#1877F2; font-weight:900; font-size:13px;");
  var modal = document.getElementById('dvUniversalUpdateModal');
  var btn = document.getElementById('dvUniversalUpdateOkayBtn');
  var savedVersion = localStorage.getItem(DV_STORAGE_KEY);
  if (savedVersion && savedVersion !== DV_APP_VERSION) {
    modal.style.display = 'flex';
  } else if (!savedVersion) {
    localStorage.setItem(DV_STORAGE_KEY, DV_APP_VERSION);
  }
  btn.addEventListener('click', function() {
    localStorage.setItem(DV_STORAGE_KEY, DV_APP_VERSION);
    modal.style.display = 'none';
    window.location.reload();
  });
})();
</script>
