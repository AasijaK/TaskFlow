document.addEventListener('DOMContentLoaded', () => {
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const sidebar = document.querySelector('.sidebar');
  const profileTrigger = document.getElementById('profileTrigger');
  const profileMenu = document.getElementById('profileMenu');

  // Mobile Sidebar Toggle
  if (mobileNavToggle && sidebar) {
    mobileNavToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      const isExpanded = sidebar.classList.contains('active');
      mobileNavToggle.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('active') &&
          !sidebar.contains(e.target) &&
          !mobileNavToggle.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });
  }

  // Profile Menu Interaction
  if (profileTrigger && profileMenu) {
    let menuTimeout;

    const openMenu = () => {
      clearTimeout(menuTimeout);
      profileMenu.classList.add('active');
      profileTrigger.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
      menuTimeout = setTimeout(() => {
        profileMenu.classList.remove('active');
        profileTrigger.setAttribute('aria-expanded', 'false');
      }, 200); // Brief delay to allow pointer to move from trigger to menu
    };

    // Hover behavior
    profileTrigger.addEventListener('mouseenter', openMenu);
    profileTrigger.addEventListener('mouseleave', closeMenu);
    profileMenu.addEventListener('mouseenter', openMenu);
    profileMenu.addEventListener('mouseleave', closeMenu);

    // Click/Tap behavior
    profileTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = profileMenu.classList.contains('active');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Accessibility: Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && profileMenu.classList.contains('active')) {
        closeMenu();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!profileMenu.contains(e.target) && !profileTrigger.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // Sidebar link active state handling
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-item').forEach(link => {
    if (currentPath.endsWith(link.getAttribute('href'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
