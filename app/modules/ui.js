export function renderTask(taskBody, addTask) {
  if (addTask.length) {
    taskBody.innerHTML = addTask
      .map(
        (t, index) =>
          `<tr class="border-t" data-index=${index}>
          <td class="p-2 check-js"><input class = "checked-js" ${
            t.status === "completado" ? "checked" : ""
          } type="checkbox"></td>
          <td class="p-2 ${t.status === "completado" ? "line-through" : ""}">${
            t.nameTask
          }</td>
          <td class="p-2">${t.date}</td>
          <td class="p-2">${t.priority}</td>
           <td class="p-2">${t.category}</td>
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
