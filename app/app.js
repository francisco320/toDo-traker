import { openAndClose } from "./modal.js";

const taskNew = document.getElementById("tarea");
const dayTask = document.getElementById("date-js");
const priority = document.getElementById("Prioridad");
const btnAdd = document.querySelector(".addBtn");

const task = [];
//funcion para agregar tarea
function addNewTask() {
  task.push({
    nameTask: taskNew.value,
    date: dayTask.value,
    priority: priority.value,
    status: "pendiente",
  });

  renderTask();

  //limpiar datos
  taskNew.value = "";
  dayTask.value = "";
  priority.value = "";
}

function renderTask() {
  const taskBody = document.getElementById("task-body");
  taskBody.innerHTML = task
    .map(
      (t) =>
        `<tr>
  <td>${t.nameTask}</td>
  <td>${t.date}</td>
  <td>${t.priority}</td>
  <td>${t.status}</td>
  </tr>`
    )
    .join("");
  console.log(taskBody.innerHTML);
}

btnAdd.addEventListener("click", () => {
  addNewTask();
  renderTask();
  console.log(task);
});

document.addEventListener("DOMContentLoaded", openAndClose);
console.log("documento cargado");
