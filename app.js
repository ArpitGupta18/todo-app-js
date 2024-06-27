const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

function addTodo() {
	const todoText = todoInput.value.trim();

	if (todoText !== "") {
		const listItem = document.createElement("li");
		listItem.className = "todo-item";

		const todoSpan = document.createElement("span");
		todoSpan.innerText = todoText;

		const deleteButton = document.createElement("button");
		deleteButton.innerHTML = "X";
		deleteButton.className = "delete-todo";

		listItem.appendChild(todoSpan);
		listItem.appendChild(deleteButton);

		todoList.appendChild(listItem);

		todoInput.value = "";

		todoSpan.addEventListener("click", () => {
			todoSpan.classList.toggle("todo-completed");
		});

		deleteButton.addEventListener("click", () => {
			todoList.removeChild(listItem);
		});
	}
}
addTodoButton.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		addTodo();
	}
});
