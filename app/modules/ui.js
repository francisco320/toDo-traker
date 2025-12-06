const CATEGORY_COLORS = {
  //mapeo de categorias
  personal: "bg-yellow-300 text-yellow-800",
  work: "bg-blue-300 text-blue-800",
  task: "bg-red-300 text-red-800",
  idea: "bg-purple-300 text-purple-800",
  education: "bg-green-300 text-green-800",
};

const DEFAULT_COLOR_CLASS = "bg-gray-300 text-gray-800";

export function getColorClasses(category) {
  return CATEGORY_COLORS[category] || DEFAULT_COLOR_CLASS;
}

export function renderTask(taskBody, addTask) {
  if (addTask.length) {
    taskBody.innerHTML = addTask
      .map((t, index) => {
        const tagClasses = getColorClasses(t.category);

        return `<article
          class="note bg-white p-6 rounded-lg shadow-md text-left flex flex-col justify-around break-inside-avoid mb-6"
          data-index=${index}>
          <span
          class="tag w-fit text-center p-1 rounded-lg text-[0.9rem] font-medium
          ${tagClasses}">
          ${t.category}
          </span>
          <h2 class="text-2xl font-black font-sans">${t.nameTask}</h2>
          <p
          class="text-gray-600 font-normal "
          >
          ${t.description}</p>
          <div class="footer-info flex gap-2 w-full">
          <span>${t.priority}</span>
          <span> - ${t.date}</span>
          <button class="btn-delete ml-auto place-self-end pointer ">
          <img
          class="place-self-end "
          src="assets/delete_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          alt="delete"
          />
          </button>
          </div>
          </article>`;
      })
      .join("");
  } else {
    taskBody.innerHTML = `<td colspan="5" class="p-10 text-center text-gray-400">
        No hay tareas en este momento.....
        </td>`;
  }
}
