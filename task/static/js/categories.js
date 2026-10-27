document.addEventListener('DOMContentLoaded', () => {
  // Modal Elements
  const categoryModal = document.getElementById('categoryModal');
  const deleteModal = document.getElementById('deleteModal');
  const openCreateModalBtn = document.getElementById('openCreateModal');
  const openCreateModalSecondary = document.getElementById('openCreateModalSecondary');
  const closeModalBtn = document.getElementById('closeModal');
  const cancelModalBtn = document.getElementById('cancelModal');
  const cancelDeleteBtn = document.getElementById('cancelDelete');
  const confirmDeleteBtn = document.getElementById('confirmDelete');

  const categoryForm = document.getElementById('categoryForm');
  const categoryNameInput = document.getElementById('categoryName');
  const nameError = document.getElementById('nameError');

  // Helper to toggle modals
  const toggleModal = (modal, state) => {
    if (state) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Open Create Modal
  const handleOpenCreate = () => {
    categoryForm.reset();
    setFieldError(categoryNameInput, nameError, true); // Clear errors
    toggleModal(categoryModal, true);
    categoryNameInput.focus();
  };

  if (openCreateModalBtn) openCreateModalBtn.addEventListener('click', handleOpenCreate);
  if (openCreateModalSecondary) openCreateModalSecondary.addEventListener('click', handleOpenCreate);

  // Close Modal Actions
  const handleCloseModal = () => toggleModal(categoryModal, false);
  if (closeModalBtn) closeModalBtn.addEventListener('click', handleCloseModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', handleCloseModal);

  // Close modal on background click
  categoryModal.addEventListener('click', (e) => {
    if (e.target === categoryModal) handleCloseModal();
  });

  // Validation Helper
  const setFieldError = (input, errorElement, isValid) => {
    if (isValid) {
      input.classList.remove('invalid');
      errorElement.style.display = 'none';
    } else {
      input.classList.add('invalid');
      errorElement.style.display = 'block';
    }
  };

  // Category Form Submit
  categoryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = categoryNameInput.value.trim().length > 0;
    setFieldError(categoryNameInput, nameError, isNameValid);

    if (isNameValid) {
      // Integration point for future API call
      console.log('Frontend validation passed. Saving category:', categoryNameInput.value);

      // As per instructions: Do not claim the category was saved.
      // We simply close the modal for now.
      handleCloseModal();
    }
  });

  // Delete Modal Logic (Placeholders)
  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener('click', () => toggleModal(deleteModal, false));
  }
  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', () => {
      console.log('Confirmed delete action. Awaiting backend integration.');
      toggleModal(deleteModal, false);
    });
  }

  // Close delete modal on background click
  deleteModal.addEventListener('click', (e) => {
    if (e.target === deleteModal) toggleModal(deleteModal, false);
  });
});
