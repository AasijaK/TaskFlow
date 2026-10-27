document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.getElementById('registerForm');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const submitBtn = document.getElementById('submitBtn');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');

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

  // Validation logic
  const validateForm = () => {
    const isNameValid = fullNameInput.value.trim().length > 0;
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = passwordInput.value.trim().length > 0;
    const isConfirmValid = confirmPasswordInput.value.trim().length > 0 &&
                           confirmPasswordInput.value === passwordInput.value;

    setFieldError(fullNameInput, nameError, isNameValid);
    setFieldError(emailInput, emailError, isEmailValid);
    setFieldError(passwordInput, passwordError, isPasswordValid);
    setFieldError(confirmPasswordInput, confirmPasswordError, isConfirmValid);

    return isNameValid && isEmailValid && isPasswordValid && isConfirmValid;
  };

  // Real-time feedback on blur
  fullNameInput.addEventListener('blur', () => {
    setFieldError(fullNameInput, nameError, fullNameInput.value.trim().length > 0);
  });

  emailInput.addEventListener('blur', () => {
    setFieldError(emailInput, emailError, validateEmail(emailInput.value));
  });

  passwordInput.addEventListener('blur', () => {
    setFieldError(passwordInput, passwordError, passwordInput.value.trim().length > 0);
  });

  confirmPasswordInput.addEventListener('blur', () => {
    setFieldError(confirmPasswordInput, confirmPasswordError,
      confirmPasswordInput.value.trim().length > 0 && confirmPasswordInput.value === passwordInput.value);
  });

  // Form Submission
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Prevent double submission
      submitBtn.disabled = true;
      submitBtn.textContent = 'Creating Account...';

      // As per instructions: Do not pretend the user has signed in.
      console.log('Frontend registration validation passed. Awaiting backend integration.');

      // Reset button for demo purposes after a short delay
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Create Account';
      }, 1500);
    }
  });
});
