const addtodo = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const deleteTodo = document.querySelector(".delete");
const listItem = document.querySelector(".list-group-item");

const generateTemplate = (todo, index) => {
  const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete" onclick="deleteTodoItem(${index})"></i>
        </li>
    `;
  list.innerHTML += html;
};

addtodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addtodo.add.value.trim();

  if (todo.length) {
    generateTemplate(todo);
    addtodo.reset();
  }
});

// delete todos
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentNode.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

//keyup event
search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
