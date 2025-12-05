export function renderTask(taskBody, addTask) {
  if (addTask.length) {
    taskBody.innerHTML = addTask
      .map(
        (t, index) =>
          `<article
          class="note bg-white p-6 rounded-lg shadow-md text-left flex flex-col justify-around"
        data-index=${index}>
          <span
            class="tag w-1/8 text-center p-1 rounded-lg text-[0.9rem] font-medium bg-green-700">
            ${t.category}
            </span>
          <h2 class="text-2xl font-black font-sans">${t.nameTask}</h2>
          <p
            class="text-gray-600 font-normal line-clamp-3 hover:line-clamp-none"
          >
            ${t.description}</p>
          <div class="footer-info flex gap-2 w-full">
            <span>${t.priority}</span>
            <span> - ${t.date}</span>
            <button class="ml-auto place-self-end btn-delete">
              <img
                class="place-self-end "
                src="assets/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
                alt="delete"
              />
            </button>
          </div>
        </article>`
      )
      .join("");
  } else {
    taskBody.innerHTML = `<td colspan="5" class="p-10 text-center text-gray-400">
            No hay tareas en este momento.....
          </td>`;
  }
}
