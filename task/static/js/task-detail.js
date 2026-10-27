document.addEventListener('DOMContentLoaded', () => {
  const taskDetailContent = document.getElementById('taskDetailContent');
  const deleteModal = document.getElementById('deleteModal');
  const cancelDeleteBtn = document.getElementById('cancelDelete');
  const confirmDeleteBtn = document.getElementById('confirmDelete');

  // Determine if a task ID was provided in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const taskId = urlParams.get('id');

  // Template for the task detail view
  const renderTaskDetails = (task) => {
    return `
      <div class="task-detail-card">
        <div class="detail-header">
          <h1 class="detail-title">${task.title}</h1>
          <div class="detail-actions">
            <a href="task-form.html?id=${task.id}" class="btn btn-secondary">Edit</a>
            <button id="deleteTaskBtn" class="btn btn-ghost" style="color: var(--color-high)">Delete</button>
          </div>
        </div>

        <div class="detail-section">
          <span class="section-label">Description</span>
          <div class="detail-content">${task.description || 'No description provided.'}</div>
        </div>

        <div class="detail-grid">
          <div class="meta-item">
            <span class="section-label">Status</span>
            <span class="meta-value"><span class="badge badge-${task.status}">${task.status}</span></span>
          </div>
          <div class="meta-item">
            <span class="section-label">Priority</span>
            <span class="meta-value"><span class="badge badge-${task.priority}">${task.priority}</span></span>
          </div>
          <div class="meta-item">
            <span class="section-label">Due Date</span>
            <span class="meta-value">${task.dueDate || 'Not set'}</span>
          </div>
          <div class="meta-item">
            <span class="section-label">Category</span>
            <span class="meta-value">${task.category || 'None'}</span>
          </div>
        </div>
      </div>
    `;
  };

  // Load task data
  if (taskId) {
    console.log(`Fetching task data for ID: ${taskId}`);
    // In a real app, we would fetch from the API here.
    // For the purpose of this frontend implementation, we stay in the empty state
    // because we are forbidden from inventing task data.
  }

  // Modal Toggle for Delete
  const toggleDeleteModal = (state) => {
    if (state) {
      deleteModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      deleteModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Event Delegation for the Delete Button (since it's dynamically rendered)
  document.addEventListener('click', (e) => {
    if (e.target.id === 'deleteTaskBtn' || e.target.closest('#deleteTaskBtn')) {
      toggleDeleteModal(true);
    }
  });

  if (cancelDeleteBtn) {
    cancelDeleteBtn.addEventListener('click', () => toggleDeleteModal(false));
  }

  if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', () => {
      console.log('Confirmed deletion for task ID:', taskId);
      // Backend integration point
      toggleDeleteModal(false);
    });
  }
});
