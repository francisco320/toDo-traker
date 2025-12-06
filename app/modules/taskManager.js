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
  let filterStatusPriority = task;

  if (selectPriority !== "all") {
    filterStatusPriority = filterStatusPriority.filter(
      (t) => t.category === selectCategory
    );
    console.log(selectCategory);
  }

  console.log(filterStatusPriority);
  return filterStatusPriority;
}
