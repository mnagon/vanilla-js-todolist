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
  const checkbox = document.createElement("input");
  const button = document.createElement("button");
  const label = document.createElement("label");

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", todo);
  button.innerText = "delete";
  label.innerText = todo;
  label.setAttribute("for", todo);

  checkbox.addEventListener("change", function (e) {
    const todoItem = e.target.parentNode;
    if (this.checked) {
      moveToCompleteList(todoItem);
    } else {
      moveToTodoList(todoItem);
    }
  });
  button.addEventListener("click", function (e) {
    const todoItem = e.target.parentNode;
    removeTodo(todoItem);
  });

  todoItem.className = "flex items-center mt-4 pb-4 border-b";
  label.className = "w-full mx-3";
  button.className = "bg-red-500 px-3 rounded text-white";

  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  todoItem.appendChild(button);
  return todoItem;
}

function addTodo() {
  const todo = input.value;
  if (!todo) return;
  const todoItem = createTodoItem(todo);
  todoList.appendChild(todoItem);
  input.value = "";
  input.focus();
}

function removeTodo(todoItem) {
  const list = todoItem.parentNode;
  list.removeChild(todoItem);
}

function moveToTodoList(todoItem) {
  completeList.removeChild(todoItem);
  todoList.appendChild(todoItem);
}

function moveToCompleteList(todoItem) {
  todoList.removeChild(todoItem);
  completeList.appendChild(todoItem);
}
