import { deleteTask } from "./deleteTask.js";
import { editTask } from "./editTask.js";
import { toggleTask } from "./toggleTask.js";
// import { clearCompleted } from "./clearCompleted.js";

// const clearButton = document.querySelector('#clear-button');

// clearButton.addEventListener('click', clearCompleted);

export function addTask(taskValue, isComplete = false) {
    const ul = document.querySelector('#task-list');
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = isComplete;
    checkbox.checked = isComplete;
    checkbox.addEventListener('change', toggleTask);

    const text = document.createElement('span');
    text.innerText = taskValue;
    text.style.textDecoration = isComplete ? 'line-through' : 'none';

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', editTask);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTask);

    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    ul.appendChild(li);
}