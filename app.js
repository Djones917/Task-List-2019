// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
// console.log(taskInput);

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    } 

    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Creat new link element
    const link = doucment.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);
    // clear input
    taskInput.value = '';

    e.preventDefault();
}


// For some reason li and link say they are not defined!
// Delete this and console.log below just trying to figure out why debugger is not working!
//console.log(addTask);
