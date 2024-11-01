import { addTaskFromInput } from "./modules/addTaskFromInput.js";
import { loadTask } from "./modules/loadTask.js";


document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('#add-task')
    addButton.addEventListener('click', addTaskFromInput);
    loadTask();
});
