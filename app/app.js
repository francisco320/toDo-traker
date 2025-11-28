import { openAndClose } from "./modal.js";
import {
  addNewTask,
  deleteTask,
  updateTask,
  task,
} from "./modules/taskManager.js";
import { renderTask } from "./modules/ui.js";
import { saveTasks, loadTasks } from "./modules/storage.js";

const taskNew = document.getElementById("tarea");
const dayTask = document.getElementById("date-js");
const priority = document.getElementById("Prioridad");
const btnAdd = document.querySelector(".addBtn");
const taskBody = document.getElementById("task-body");

//agregar
btnAdd.addEventListener("click", () => {
  addNewTask(taskNew.value, dayTask.value, priority.value);

  renderTask(taskBody);

  //limpiar datos
  taskNew.value = "";
  dayTask.value = "";
  priority.value = "";
});

//editar y eliminar

taskBody.addEventListener("click", (e) => {
  const row = e.target.closest("tr");
  if (!row) return;
  const index = row.dataset.index;

  if (e.target.classList.contains("btn-delete")) {
    deleteTask(index);
    renderTask(taskBody);
  }

  if (e.target.classList.contains("btn-edit")) {
    editIndex = index;
    editName.value = task[index].nameTask;
    editDate.value = task[index].date;
    editPriority.value = task[index].priority;
    editDialog.showModal();
  }
  if (e.target.checked) {
    task[index].status = "completado";
    row.classList.add("line-through");
    renderTask(taskBody);
    if (task.status === "completado") {
      row.classList.add("line-through"); // ✅ Se aplica la clase de tachado
    }
  }
});

let editIndex = null;

saveEdit.addEventListener("click", (e) => {
  e.preventDefault();
  if (editIndex !== null) {
    updateTask(editIndex, {
      nameTask: editName.value,
      date: editDate.value,
      priority: editPriority.value,
      status: "pendiente",
    });
    renderTask(taskBody);
    editDialog.close();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  openAndClose();
  renderTask(taskBody);
});
