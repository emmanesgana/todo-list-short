import { addTask } from "./addTask.js";

export function loadTask() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => {
        addTask(task.text, task.isComplete);
    });
}