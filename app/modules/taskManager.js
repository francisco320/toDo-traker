import { loadTasks, saveTasks } from "./storage.js";

export const task = loadTasks();

export function addNewTask(name, date, priority) {
  task.push({
    nameTask: name,
    date,
    priority,
    status: "pendiente",
  });
  saveTasks(task);
}

export function deleteTask(index) {
  task.splice(index, 1);
  saveTasks(task);
}

export function updateTask(index, data) {
  task[index] = { ...data };
  saveTasks(task);
}
