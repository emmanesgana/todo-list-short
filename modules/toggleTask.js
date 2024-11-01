import { saveTask } from "./saveTask.js";

export function toggleTask(event) {
    const text = event.target.nextElementSibling;
    text.style.textDecoration = event.target.checked ? 'line-through' : 'none';
    saveTask();
}