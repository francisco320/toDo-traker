import { loadTasks, saveTasks } from "./storage.js";

export const task = loadTasks();

export function addNewTask(name, date, priority, category, description) {
  task.push({
    nameTask: name,
    date,
    priority,
    category,
    description,
  });
  saveTasks(task);
  console.log(task);
  console.log("la categoria es:", category);
}

export function deleteTask(index) {
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
    console.log(selectCategory);
  }
  console.log(filterCategory);
  return filterCategory;
}

export function SearchMatch(matched) {
  const searchKey = matched ? matched.toLowerCase() : "";
  if (searchKey === "") {
    return task;
  }
  const searchNotes = task.filter((search) => {
    const findMatch = search.nameTask ? search.nameTask.toLowerCase() : "";
    console.log(findMatch);
    return findMatch.startsWith(searchKey);
  });
  return searchNotes;
}
