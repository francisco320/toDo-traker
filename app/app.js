import { openAndClose } from "./modal.js";

const taskNew = document.getElementById("tarea");
const dayTask = document.getElementById("date-js");
const priority = document.getElementById("Prioridad");
const btnAdd = document.querySelector(".addBtn");
const taskBody = document.getElementById("task-body");

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
  taskBody.innerHTML = task
    .map(
      (t, index) =>
        `<tr class="border-t" data-index=${index}>
  <td class="p-2">${t.nameTask}</td>
  <td class="p-2">${t.date}</td>
  <td class="p-2">${t.priority}</td>
  <td class="p-2">${t.status}</td>
  <td class="p-2"><button class ="btn-delete hover:cursor-pointer">X</button>
  <button class ="btn-edit ml-2 hover:cursor-pointer">editar</button>
  
  </td>
  </tr>`
    )
    .join("");
}

btnAdd.addEventListener("click", () => {
  addNewTask();
  renderTask();
  console.log(task);
});

taskBody.addEventListener("click", (e) => {
  const row = e.target.closest("tr");
  if (!row) return;
  const index = row.dataset.index;
  if (e.target.classList.contains("btn-delete")) {
    task.splice(index, 1);
    renderTask();
  }
  if (e.target.classList.contains("btn-edit")) {
    editIndex = index;
    editName.value = task[index].nameTask;
    editDate.value = task[index].date;
    editPriority.value = task[index].priority;
    editDialog.showModal();
    renderTask();
  }
});

let editIndex = null;

saveEdit.addEventListener("click", (e) => {
  e.preventDefault();
  if (editIndex !== null) {
    task[editIndex].nameTask = editName.value;
    task[editIndex].date = editDate.value;
    task[editIndex].priority = editPriority.value;
    renderTask();
    editDialog.close();
  }
});

document.addEventListener("DOMContentLoaded", openAndClose);
console.log("documento cargado");
