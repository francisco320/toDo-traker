import { openAndClose } from "./modal.js";
import {
  addNewTask,
  deleteTask,
  updateTask,
  task,
} from "./modules/taskManager.js";
import { renderTask } from "./modules/ui.js";
import { taskFiltered } from "./modules/taskManager.js";
import { saveTasks } from "./modules/storage.js";

const taskNew = document.getElementById("tarea");
const dayTask = document.getElementById("date-js");
const priority = document.getElementById("Prioridad");
const btnAdd = document.querySelector(".addBtn");
const noteContainer = document.getElementById("container-note");
const btnFilter = document.getElementById("filterTask");
const category = document.getElementById("categoria");
const description = document.getElementById("description");

//agregar
btnAdd.addEventListener("click", () => {
  addNewTask(
    taskNew.value,
    dayTask.value,
    priority.value,
    category.value,
    description.value
  );

  renderTask(noteContainer, task);

  //limpiar datos
  taskNew.value = "";
  dayTask.value = "";
  priority.value = "";
  category.value = "";
});

//editar y eliminar

noteContainer.addEventListener("click", (e) => {
  const row = e.target.closest("article");
  if (!row) return;
  const index = row.dataset.index;

  if (e.target.classList.contains("btn-delete")) {
    deleteTask(index);
    renderTask(noteContainer, task);
  }

  if (e.target.classList.contains("btn-edit")) {
    editIndex = index;
    editName.value = task[index].nameTask;
    editDate.value = task[index].date;
    editPriority.value = task[index].priority;
    editDialog.showModal();
  }
  if (e.target.classList.contains("checked-js")) {
    const checkIndex = index;
    task[checkIndex].status = e.target.checked ? "completado" : "pendiente";

    renderTask(noteContainer, task);
    saveTasks(task);
    console.log("estado actualizado:", task[index].status);
  }
});

/*let editIndex = null;

saveEdit.addEventListener("click", (e) => {
  e.preventDefault();
  if (editIndex !== null) {
    updateTask(editIndex, {
      nameTask: editName.value,
      date: editDate.value,
      priority: editPriority.value,
      status: "pendiente",
    });
    renderTask(noteContainer, task);
    editDialog.close();
  }
});

//filtrado de elementos por status y prioridad
btnFilter.addEventListener("change", (e) => {
  const filteredPriority = document.querySelector(".priorityFilter").value;
  const statusFiltered = document.querySelector(".statusFilter").value;

  const filterAplied = taskFiltered(filteredPriority, statusFiltered);

  renderTask(noteContainer, filterAplied);
});*/

document.addEventListener("DOMContentLoaded", () => {
  openAndClose();

  renderTask(noteContainer, task);
});
