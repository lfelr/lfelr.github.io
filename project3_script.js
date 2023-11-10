 const profileImage = document.getElementById("profileImage");
  const fileInput = document.getElementById("fileInput");

  fileInput.addEventListener("change", function () {
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
          const reader = new FileReader();
          reader.onload = function (e) {
              profileImage.src = e.target.result;
          };
          reader.readAsDataURL(selectedFile);
      }
  });

  function openFileInput() {
      fileInput.click();
  }





const todoList = document.getElementById("todoList");
  const taskInput = document.getElementById("task");
  let draggingItem = null;


  function addTask() {
    const taskText = taskInput.value;
    if (taskText.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      if (li.classList.contains("completed")) {
        todoList.appendChild(li);
      } else {
        todoList.insertBefore(li, todoList.firstChild);
      }
    });

    li.setAttribute("draggable", true);

    li.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", taskText);
      draggingItem = li;
    });

    li.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    li.addEventListener("dragenter", () => {
      li.style.backgroundColor = "lightgray";
    });

    li.addEventListener("dragleave", () => {
      li.style.backgroundColor = "";
    });

    li.addEventListener("drop", (e) => {
      if (draggingItem !== null) {
        todoList.insertBefore(draggingItem, li);
        draggingItem = null;
        li.style.backgroundColor = "";
      }
    });

    todoList.appendChild(li);
    taskInput.value = "";

  }