import { addTask } from "./addTask.js";
import { saveTask } from "./saveTask.js";

export function addTaskFromInput() {
    const taskValue = document.querySelector('#new-task').value;
    if (taskValue) {
        addTask(taskValue);

        const newTask = document.querySelector('#new-task');
        newTask.value = '';
        saveTask();
    }
}