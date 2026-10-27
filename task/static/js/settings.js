document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.getElementById('profileForm');
  const signOutBtn = document.getElementById('signOutBtn');
  const reducedMotionPref = document.getElementById('reducedMotionPref');
  const compactViewPref = document.getElementById('compactViewPref');

  // Profile Form Submission
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Integration point for future API call
    console.log('Frontend profile update requested. Awaiting backend integration.');

    // As per instructions: Do not claim that profile changes were saved.
    alert('Profile updates require a backend connection to be saved.');
  });

  // Preference Handling (Frontend-only)
  const handlePreferenceChange = (prefId, value) => {
    console.log(`Preference ${prefId} set to ${value}`);
    // In a real app, this would be saved to a user preference table via API
    // or a local settings object.
  };

  if (reducedMotionPref) {
    reducedMotionPref.addEventListener('change', (e) => {
      handlePreferenceChange('reducedMotion', e.target.checked);
    });
  }

  if (compactViewPref) {
    compactViewPref.addEventListener('change', (e) => {
      handlePreferenceChange('compactView', e.target.checked);
    });
  }

  // Sign Out Action
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      console.log('Sign out requested. Awaiting backend session termination.');
      alert('Sign out requires a backend session to be active.');
    });
  }
});
