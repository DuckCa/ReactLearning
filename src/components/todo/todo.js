document.addEventListener("DOMContentLoaded", function () {
  const btnAdd = document.querySelector(".btn-add");
  const inputText = document.querySelector(".input-text");
  const todoData = document.querySelector(".todo-data");

  btnAdd.addEventListener("click", () => {
    const task = inputText.value;
    if (task.trim() !== "") {
      const newTask = document.createElement("p");
      newTask.textContent = task;
      todoData.appendChild(newTask);
      inputText.value = "";
    } else {
    }
  });
});
