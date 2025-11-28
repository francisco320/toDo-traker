import { task } from "./taskManager.js";

export function renderTask(taskBody) {
  if (task.length) {
    taskBody.innerHTML = task
      .map(
        (t, index) =>
          `<tr class="border-t" data-index=${index}>
          <td class="p-2 checked-js"><input type="checkbox"></td>
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
  } else {
    taskBody.innerHTML = `<td colspan="5" class="p-10 text-center text-gray-400">
            No hay tareas en este momento.....
          </td>`;
  }
}
