document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        if (task) {
            const li = document.createElement('li');
            li.textContent = task;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', function() {
                taskList.removeChild(li);
            });

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        }
    }
});
