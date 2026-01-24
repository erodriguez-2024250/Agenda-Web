const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const taskList = document.getElementById("taskList");
const sortBtn = document.getElementById("sortBtn");

let tasks = [];

taskForm.addEventListener("submit", e => {
    e.preventDefault();

    const task = {
        text: taskInput.value,
        priority: priorityInput.value
    };

    tasks.push(task);
    renderTasks();

    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add(`priority-${task.priority}`);

        li.innerHTML = `
            <span>${task.text} (Prioridad ${task.priority})</span>
            <div class="actions">
                <button onclick="editTask(${index})">✏️</button>
                <button onclick="deleteTask(${index})">🗑️</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    const newText = prompt("Editar tarea:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText;
        renderTasks();
    }
}

sortBtn.addEventListener("click", () => {
    tasks.sort((a, b) => a.priority - b.priority);
    renderTasks();
});
