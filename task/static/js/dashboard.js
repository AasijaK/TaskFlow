document.addEventListener('DOMContentLoaded', () => {
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const sidebar = document.querySelector('.sidebar');

  // Mobile Sidebar Toggle
  if (mobileNavToggle && sidebar) {
    mobileNavToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');

      // Update aria-expanded if applicable
      const isExpanded = sidebar.classList.contains('active');
      mobileNavToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close sidebar when clicking outside of it on mobile
    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('active') &&
          !sidebar.contains(e.target) &&
          !mobileNavToggle.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });
  }

  // Sidebar link active state handling (for non-SPA navigation)
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-item').forEach(link => {
    if (currentPath.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
