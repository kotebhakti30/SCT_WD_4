const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskTime = document.getElementById("task-time");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  const time = taskTime.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task-item";

  const taskContent = document.createElement("div");
  taskContent.textContent = taskText;
  li.appendChild(taskContent);

  if (time) {
    const timeDisplay = document.createElement("small");
    timeDisplay.textContent = `Due: ${new Date(time).toLocaleString()}`;
    li.appendChild(timeDisplay);
  }

  const buttonGroup = document.createElement("div");
  buttonGroup.className = "task-buttons";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskContent.textContent);
    if (newText !== null && newText.trim() !== "") {
      taskContent.textContent = newText;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => taskList.removeChild(li);

  buttonGroup.appendChild(completeBtn);
  buttonGroup.appendChild(editBtn);
  buttonGroup.appendChild(deleteBtn);

  li.appendChild(buttonGroup);
  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
});


