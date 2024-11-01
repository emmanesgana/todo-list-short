import { saveTask } from "./saveTask.js";

export function editTask(event) {
    const textSpan = event.target.previousElementSibling;
    const newText = prompt('Edit task', textSpan.innerText);

    if (newText !== null) {
        textSpan.innerText = newText;
        saveTask();
    }
}