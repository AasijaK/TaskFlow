document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('togglePassword');

  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Show/Hide Password Toggle
  document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target') || 'password';
      const input = document.getElementById(targetId);
      if (!input) return;

      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      toggle.setAttribute('aria-label', type === 'password' ? 'Show password' : 'Hide password');

      // Rotate icon slightly or change color to indicate state
      toggle.style.color = type === 'text' ? 'var(--color-primary)' : 'var(--color-text-muted)';
    });
  });

  // Simple Email Validation
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const setFieldError = (input, errorElement, isValid) => {
    if (isValid) {
      input.classList.remove('invalid');
      errorElement.style.display = 'none';
    } else {
      input.classList.add('invalid');
      errorElement.style.display = 'block';
    }
  };

  // Real-time validation feedback on blur
  emailInput.addEventListener('blur', () => {
    setFieldError(emailInput, emailError, validateEmail(emailInput.value));
  });

  passwordInput.addEventListener('blur', () => {
    setFieldError(passwordInput, passwordError, passwordInput.value.trim().length > 0);
  });

  // Form Submission
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = passwordInput.value.trim().length > 0;

    setFieldError(emailInput, emailError, isEmailValid);
    setFieldError(passwordInput, passwordError, isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      // As per instructions: Do not pretend the user has signed in.
      // We simply stop here. In a real app, this is where the API call would go.
      console.log('Frontend validation passed. Awaiting backend integration.');
    }
  });
});
