const main = () => {
  const todoInput = document.getElementById("todo-input");
  const inputBtn = document.getElementById("input-btn");
  const todoList = document.getElementById("list-todo");

  inputBtn.addEventListener("click", () => {
    if (todoInput.value === "") {
      alert("Title can't be empty");
      return;
    }
    const newList = document.createElement("li");
    const checkBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    const newParagraph = document.createElement("p");

    newParagraph.setAttribute("id", "text");
    newParagraph.textContent = todoInput.value;
    // Check-btn
    checkBtn.textContent = "✔";
    checkBtn.setAttribute("id", "check-btn");
    checkBtn.addEventListener("click", () => {
      newParagraph.classList.toggle("line-through");
    });
    // Delete btn
    delBtn.textContent = "X";
    delBtn.setAttribute("id", "del-btn");
    delBtn.addEventListener("click", () => {
      newList.remove();
    });

    newList.append(checkBtn, newParagraph, delBtn);

    todoList.appendChild(newList);
    todoInput.value = "";
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
