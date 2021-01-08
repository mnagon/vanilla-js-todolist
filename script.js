const todo = localStorage.getItem("todo") || [];
const complete = localStorage.getItem("complete") || [];
const input = document.getElementById("todo-input");
const todoTab = document.getElementById("todo-tab");
const completeTab = document.getElementById("complete-tab");
const todoList = document.getElementById("todo-list");
const completeList = document.getElementById("complete-list");

input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addTodo();
  }
});

function showTodoList() {
  todoTab.classList.add("border-b-2");
  todoList.classList.remove("hidden");
  todoList.classList.add("block");
  completeTab.classList.remove("border-b-2");
  completeList.classList.remove("block");
  completeList.classList.add("hidden");
}

function showCompleteList() {
  completeTab.classList.add("border-b-2");
  completeList.classList.remove("hidden");
  completeList.classList.add("block");
  todoTab.classList.remove("border-b-2");
  todoList.classList.remove("block");
  todoList.classList.add("hidden");
}

function createTodoItem(todo) {
  const todoItem = document.createElement("div");
  const doneCheckbox = document.createElement("input");
  const deleteButton = document.createElement("button");
  const todoText = document.createElement("span");
  todoItem.className = "todo__item";
  doneCheckbox.setAttribute("type", "checkbox");
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", function (e) {
    addComplete();
  });
  todoText.innerHTML = todo;
  todoItem.appendChild(doneCheckbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  return todoItem;
}

function addTodo() {
  const todo = input.value;
  if (!todo) return;
  const todoItem = createTodoItem(todo);
  todoList.appendChild(todoItem);
  input.value = "";
}

function addComplete() {}
