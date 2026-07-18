const focusText = document.getElementById("focus-text");

if (focusText) {
  const studyFocus = [
    "Artificial Intelligence",
    "C Programming",
    "Linux",
    "Theory Of Computation",
  ];
  const randomFocus = studyFocus[Math.floor(Math.random() * studyFocus.length)];
  focusText.textContent = `Current focus: ${randomFocus}`;
}

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let tasks = [];

function renderTasks() {
  if (!taskList) return;

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = task.name;

    const actions = document.createElement("div");

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Undo" : "Done";
    completeButton.addEventListener("click", () => {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    actions.appendChild(completeButton);
    actions.appendChild(deleteButton);
    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

if (taskForm && taskInput && taskList) {
  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (taskInput.value.trim() !== "") {
      tasks.push({ name: taskInput.value.trim(), completed: false });
      taskInput.value = "";
      renderTasks();
    }
  });
}

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d+$/;

    if (!name || !email || !phone || !message) {
      formMessage.textContent = "Please fill in all fields.";
      return;
    }

    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (!phonePattern.test(phone)) {
      formMessage.textContent = "Phone number should contain only digits.";
      return;
    }

    formMessage.textContent = "Thank you for your message!";
    contactForm.reset();
  });
}
