import { loadTasks, saveTasks } from "./storage.js";

export const task = loadTasks();

export function addNewTask(name, date, priority, category, description) {
  if (!name || !date) {
    alert("debe introducir un titulo o la fechas");
    console.error("no puede ingrsar la nota sin un titulo o fecha");
    return;
  }

  task.push({
    nameTask: name,
    date,
    priority,
    category,
    description,
  });
  saveTasks(task);
}

export function deleteTask(index) {
  if (!index) {
    console.error("el index es invalido");
    return alert("El indice de la nota es inavlido");
  }
  task.splice(index, 1);
  saveTasks(task);
}

export function updateTask(index, data) {
  task[index] = { ...data };
  saveTasks(task);
}

export function taskFiltered(selectCategory) {
  let filterCategory = task;

  if (selectCategory !== "all") {
    filterCategory = filterCategory.filter(
      (t) => t.category === selectCategory
    );
  }

  return filterCategory;
}

export function SearchMatch(matched) {
  const searchKey = matched ? matched.toLowerCase() : "";
  if (searchKey === "") {
    return task;
  }
  const searchNotes = task.filter((search) => {
    const findMatch = search.nameTask ? search.nameTask.toLowerCase() : "";

    return findMatch.startsWith(searchKey);
  });
  return searchNotes;
}
