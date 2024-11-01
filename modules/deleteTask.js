import { saveTask } from "./saveTask.js";

export function deleteTask(event) {
    const li = event.target.parentNode;
    li.parentNode.removeChild(li);
    saveTask();
}