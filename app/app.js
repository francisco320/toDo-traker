import { openAndClose } from "./modal.js";

const taskNew = document.getElementById("tarea");
const dayTask = document.getElementById("date-js");
const priority = document.getElementById("Prioridad");
const btnAdd = document.querySelector(".addBtn");

const task = [];
const newTask = {
  nameTask: taskNew.textContent,
  date: dayTask.textContent,
  priority: priority.textContent,
  status: "pendiente",
};
function addNewTask() {
  return task.push(newTask);
}
btnAdd.addEventListener("click", () => {
  addNewTask();
  console.log(task);
});

document.addEventListener("DOMContentLoaded", openAndClose);
console.log("documento cargado");
