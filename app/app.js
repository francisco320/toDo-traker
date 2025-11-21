import { openAndClose } from "./modal.js";

const taskNew = document.getElementById("tarea");
const dayTask = document.getElementById("date-js");
const priority = document.getElementById("Prioridad");
const btnAdd = document.querySelector(".addBtn");

const task = [];

function addNewTask() {
  task.push({
    nameTask: taskNew.value,
    date: dayTask.value,
    priority: priority.value,
    status: "pendiente",
  });
  //limpiar datos
  taskNew.value = "";
  dayTask.value = "";
  priority.value = "";
}

btnAdd.addEventListener("click", () => {
  addNewTask();

  console.log(task);
});

document.addEventListener("DOMContentLoaded", openAndClose);
console.log("documento cargado");
