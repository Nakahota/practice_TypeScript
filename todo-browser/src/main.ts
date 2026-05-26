const app = document.querySelector("#app");

if (app) {
  app.innerHTML = `
    <h1>TODOアプリ</h1>

    <input id="todo-input" placeholder="TODOを入力" />
    <button id="add-button">追加</button>

    <ul id="todo-list"></ul>
  `;
}

const input = document.querySelector<HTMLInputElement>("#todo-input");
const button = document.querySelector<HTMLButtonElement>("#add-button");
const list = document.querySelector<HTMLUListElement>("#todo-list");

const todos: string[] = [];

button?.addEventListener("click", () => {
  const value = input?.value;

  if (!value) {
    return;
  }

  todos.push(value);

  renderTodos();

  input.value = "";
});

function renderTodos() {
  if (!list) {
    return;
  }

  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");

    li.textContent = todo;

    list.appendChild(li);
  });
}