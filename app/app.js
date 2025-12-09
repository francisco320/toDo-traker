import { openAndClose } from "./modal.js";
import {
  addNewTask,
  deleteTask,
  updateTask,
  task,
  taskFiltered,
  SearchMatch,
} from "./modules/taskManager.js";
import { renderTask } from "./modules/ui.js";
import { viewModal, modal, renderUpdate } from "./modules/modalNote.js";

const taskNew = document.getElementById("tarea");
const dayTask = document.getElementById("date-js");
const priority = document.getElementById("Prioridad");
const btnAdd = document.querySelector(".addBtn");
const noteContainer = document.getElementById("container-note");
const btnFilter = document.getElementById("filterTask");
const category = document.querySelector(".categoria");
const description = document.getElementById("description");
const search = document.querySelector(".search");

//agregar
btnAdd.addEventListener("click", () => {
  addNewTask(
    taskNew.value,
    dayTask.value,
    priority.value,
    category.value,
    description.value
  );
  console.log(category.value);
  renderTask(noteContainer, task);

  //limpiar datos
  taskNew.value = "";
  dayTask.value = "";
  priority.value = "";
  category.value = "";
  description.value = "";
});

//eliminar y abrir vista ampliada

noteContainer.addEventListener("click", (e) => {
  const row = e.target.closest("article");
  if (!row) return;
  const deleteBtn = e.target.closest(".btn-delete");
  if (deleteBtn) {
    const index = row.dataset.index;
    deleteTask(index);
    renderTask(noteContainer, task);
  }

  if (e.target.classList.contains("note")) {
    let showNote = row.dataset.index;
    if (showNote) {
      let viewNote = task[showNote];
      viewModal(showNote, viewNote);
    }
  }
});

// editar y guardar cambios de nota
modal.addEventListener("click", (e) => {
  const noteEdit = e.target.closest("button");
  if (e.target.classList.contains("edit-note-btn")) {
    const index = noteEdit.dataset.index;
    const editTask = task[index];
    renderUpdate(index, editTask);
  }
  let editIndex = null;
  if (e.target.classList.contains("save-note-btn")) {
    //variables para editar task
    const tag = document.getElementById("editTag");
    const nameEdit = document.getElementById("editName");
    const descripEdit = document.getElementById("editDescrip");
    const editPrio = document.getElementById("editPrio");
    const dateEdit = document.getElementById("editDate");
    editIndex = noteEdit.dataset.index;

    if (editIndex !== null) {
      updateTask(editIndex, {
        nameTask: nameEdit.value,
        date: dateEdit.value,
        priority: editPrio.value,
        category: tag.value,
        description: descripEdit.value,
      });
      renderTask(noteContainer, task);
      modal.close();
    }
  }
});

//filtrado de elementos por categoria
btnFilter.addEventListener("change", () => {
  const filteredcategory = document.querySelector(".categoryFilter").value;
  if (filteredcategory !== "all") {
    const filterAplied = taskFiltered(filteredcategory);

    renderTask(noteContainer, filterAplied);
  } else {
    renderTask(noteContainer, task);
  }
});
//busqueda lineal
search.addEventListener("input", () => {
  const matchNotes = search.value;
  if (matchNotes !== "") {
    const searchNote = SearchMatch(matchNotes);
    renderTask(noteContainer, searchNote);
    console.log("esta es lo que buscas", matchNotes);
    console.log("y este es el filtrado:", searchNote);
  } else {
    renderTask(noteContainer, task);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  openAndClose();

  renderTask(noteContainer, task);
});
