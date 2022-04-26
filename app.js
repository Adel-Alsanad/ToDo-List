window.addEventListener("load", () => {
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const list_el = document.querySelector("#todos");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = input.value;

    if (!todo) {
      alert("Please fill out the todo");
      return;
    }

    const todo_el = document.createElement("div");
    todo_el.classList.add("todo");
    list_el.appendChild(todo_el);

    const todo_content_el = document.createElement("div");
    todo_content_el.classList.add("content");
    todo_el.appendChild(todo_content_el);

    const todo_input_el = document.createElement("input");
    todo_input_el.type = "text";
    todo_input_el.value = todo;
    todo_input_el.classList.add("text");
    todo_input_el.setAttribute("readonly", "readonly");
    todo_content_el.appendChild(todo_input_el);

    const todo_actions = document.createElement("div");
    todo_actions.classList.add("actions");
    todo_el.appendChild(todo_actions);

    const todo_actions_edit = document.createElement("button");
    todo_actions_edit.classList.add("edit");
    todo_actions_edit.innerHTML = "Edit";
    todo_actions.appendChild(todo_actions_edit);

    const todo_actions_delete = document.createElement("button");
    todo_actions_delete.classList.add("delete");
    todo_actions_delete.innerHTML = "Delete";
    todo_actions.appendChild(todo_actions_delete);

    input.value = "";

    todo_actions_edit.addEventListener("click", () => {
      if (todo_actions_edit.innerText.toLocaleLowerCase() == "edit") {
        todo_input_el.removeAttribute("readonly");
        todo_input_el.focus();
        todo_actions_edit.innerText = "Save";
      } else {
        todo_input_el.setAttribute("readonly", "readonly");
        todo_actions_edit.innerText = "Edit";
      }
    });

    todo_actions_delete.addEventListener("click", () => {
      list_el.removeChild(todo_el);
    });
  });
});
