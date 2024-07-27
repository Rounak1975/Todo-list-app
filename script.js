document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);

    function addTask() {
        const taskValue = taskInput.value.trim();

        if (taskValue === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'deleteBtn';

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    function deleteTask(e) {
        if (e.target.classList.contains('deleteBtn')) {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
});