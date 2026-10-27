document.addEventListener('DOMContentLoaded', () => {
  const taskSearch = document.getElementById('taskSearch');
  const statusFilter = document.getElementById('statusFilter');
  const priorityFilter = document.getElementById('priorityFilter');
  const sortControl = document.getElementById('sortControl');
  const taskList = document.getElementById('taskList');

  const emptyStateTitle = document.getElementById('emptyStateTitle');
  const emptyStateText = document.getElementById('emptyStateText');

  // Mock integration points for future API
  const state = {
    tasks: [], // Will be populated by API call in future
    filters: {
      query: '',
      status: 'all',
      priority: 'all',
      sort: 'due-date'
    }
  };

  const updateEmptyState = (hasFilter) => {
    if (hasFilter) {
      emptyStateTitle.textContent = 'No matching tasks';
      emptyStateText.textContent = 'Try adjusting your filters or search term to find what you are looking for.';
    } else {
      emptyStateTitle.textContent = 'No tasks found';
      emptyStateText.textContent = 'Your task list is empty. Start by creating your first task!';
    }
  };

  const handleFilterChange = () => {
    state.filters.query = taskSearch.value.toLowerCase();
    state.filters.status = statusFilter.value;
    state.filters.priority = priorityFilter.value;
    state.filters.sort = sortControl.value;

    console.log('Filtering tasks with state:', state.filters);

    // Since state.tasks is empty, we simply maintain the empty state
    // In a real app, this would trigger a re-render of the task list
    const hasFilter = state.filters.query !== '' ||
                      state.filters.status !== 'all' ||
                      state.filters.priority !== 'all';

    updateEmptyState(hasFilter);
  };

  // Event Listeners
  taskSearch.addEventListener('input', handleFilterChange);
  statusFilter.addEventListener('change', handleFilterChange);
  priorityFilter.addEventListener('change', handleFilterChange);
  sortControl.addEventListener('change', handleFilterChange);
});
