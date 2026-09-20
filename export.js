
(function() {
  const sidebarBody = document.querySelector('#rightSidebar .sidebar-body');
  if (!sidebarBody) return;

  const exportBtn = document.createElement('div');
  exportBtn.className = 'sidebar-item';
  exportBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Export Notes';

  exportBtn.addEventListener('click', async () => {
    if (typeof closeRightFn === 'function') closeRightFn();
    try {
      if (typeof dbAll !== 'function') return toast('Database not ready.');
      const allNotes = await dbAll();
      if (!allNotes || allNotes.length === 0) return toast('No notes to export.');

      let textContent = "DV HYMNS - EXPORTED NOTES\n\n";
      allNotes.forEach(n => {
        const d = new Date(n.updatedAt).toLocaleString();
        textContent += `=== ${n.title || 'Untitled'} ===\nDate: ${d}\n\n${n.plain || ''}\n\n---------------------------\n\n`;
      });

      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'DV_Notes_Export.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast('Notes exported successfully.');
    } catch(e) {
      toast('Export failed.');
    }
  });

  sidebarBody.appendChild(exportBtn);
})();
