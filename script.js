// DOM Element References
const newTaskInput = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn'); // Now correctly referenced
const taskList = document.getElementById('taskList');
const messageBox = document.getElementById('message-box');
const dateTimeDisplay = document.getElementById('dateTimeDisplay');

// Filter Buttons
const filterAllBtn = document.getElementById('filterAllBtn');
const filterActiveBtn = document.getElementById('filterActiveBtn');
const filterCompletedBtn = document.getElementById('filterCompletedBtn');

// Task Statistics
const activeTasksCount = document.getElementById('activeTasksCount');
const completedTasksCount = document.getElementById('completedTasksCount');

// Confirmation Modal Elements
const confirmationModal = document.getElementById('confirmationModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');

// Global array to store tasks and their data, including time tracking
let tasks = [];
let currentFilter = 'all'; // Stores the currently active filter ('all', 'active', 'completed')

// Rest of the code remains unchanged...
// [Previous code implementation continues...]

function updateDateTime() {
    const timeElement = document.getElementById('currentTime');
    const dateElement = document.getElementById('currentDate');
    
    const now = new Date();
    
    const time = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    timeElement.textContent = time;
    dateElement.textContent = date;
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

// Removed redundant filter function declarations (showCompletedTasks, showUnfinishedTasks, showAllTasks)
// The `filterTasks` function already handles this based on the `currentFilter` logic.
// The event listeners for filter buttons now correctly call `filterTasks`.