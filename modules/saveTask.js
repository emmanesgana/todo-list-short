export function saveTask() {
    let tasks = [];
    const taskList = document.querySelectorAll('#task-list li');

    taskList.forEach((item) => {
        const text = item.querySelector('span').innerText;
        const isComplete = item.querySelector('input').checked;
        tasks.push({ text, isComplete });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}