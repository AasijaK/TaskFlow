document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const titleInput = document.getElementById('title');
  const titleError = document.getElementById('titleError');
  const saveBtn = document.getElementById('saveBtn');
  const formTitle = document.getElementById('formTitle');

  // Determine mode (Create vs Edit) based on URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const taskId = urlParams.get('id');
  const isEditMode = !!taskId;

  if (isEditMode) {
    formTitle.textContent = 'Edit Task';
    // In a real app, we would fetch task data by ID here
    // For now, we remain in a neutral empty state as per instructions
    console.log(`Loading task data for ID: ${taskId}`);
  }

  const setFieldError = (input, errorElement, isValid) => {
    if (isValid) {
      input.classList.remove('invalid');
      errorElement.style.display = 'none';
    } else {
      input.classList.add('invalid');
      errorElement.style.display = 'block';
    }
  };

  // Real-time validation
  titleInput.addEventListener('blur', () => {
    setFieldError(titleInput, titleError, titleInput.value.trim().length > 0);
  });

  // Form Submission
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isTitleValid = titleInput.value.trim().length > 0;
    setFieldError(titleInput, titleError, isTitleValid);

    if (isTitleValid) {
      // Prevent double submission
      saveBtn.disabled = true;
      const originalText = saveBtn.textContent;
      saveBtn.textContent = isEditMode ? 'Updating...' : 'Saving...';

      // Integration point for future API call
      console.log(`Frontend validation passed. ${isEditMode ? 'Updating' : 'Saving'} task...`);

      // As per instructions: Do not claim a task was saved/updated.
      // We simulate a network delay then reset for demonstration.
      setTimeout(() => {
        saveBtn.disabled = false;
        saveBtn.textContent = originalText;
      }, 1000);
    }
  });
});
