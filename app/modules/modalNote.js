import { getColorClasses } from "./ui.js";

export const modal = document.getElementById("vista-nota");

export function viewModal(index, note) {
  const tagClasses = getColorClasses(note.category);

  modal.innerHTML = ` <article
          id="note-view" 
          class="bg-white p-6 rounded-lg text-left flex flex-col justify-around break-inside-avoid mb-6"
        ><span class="tag w-fit text-center p-1 rounded-lg text-[0.9rem] font-medium ${tagClasses}">${note.category}</span>
    <h2 class="text-2xl font-black font-sans">${note.nameTask}</h2>
    <p class="text-gray-600 font-normal ">${note.description}</p>
    <div class="footer-info flex gap-2 w-full">
      <span>Prioridad: ${note.priority}</span>
      <span>Fecha: ${note.date}</span>
    </div>
    <div class="flex gap-3 justify-center">
    <button id="close-modal-btn" class="bg-yellow-300 text-yellow-500">Cerrar</button>
    <button id="edit-note-btn" class="edit-note-btn bg-red-500 " data-index="${index}">Editar</button>
    </div></article>
  `;
  modal.showModal();

  document.getElementById("close-modal-btn").onclick = () => {
    modal.close();
  };
}

export function renderUpdate(index, note) {
  const tagClasses = getColorClasses(note.category);

  modal.innerHTML = `<article  id="note-view" class="bg-white p-6 h-[150px] rounded-lg text-left flex flex-col justify-around break-inside-avoid mb-6">
        <select id="editTag" class="tag w-fit text-center p-1 rounded-lg text-[0.9rem] font-medium ${tagClasses}">
      
              <option value=" ${note.category} "> ${note.category} </option>
              <option value="idea">Idea</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="Education">Education</option>
              <option value="task">Task</option>
        </select>

    <input id="editName" type="text" class="text-2xl font-black font-sans" value ="${note.nameTask}" />

    <textarea id="editDescrip" class="text-gray-600 font-normal ">${note.description}</textarea>

    <div class="footer-info flex gap-2 w-full">

      <select id="editPrio">${note.priority}
       <option value="${note.priority}">${note.priority}</option>
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
      </select>

      <input id="editDate" type = "date" value ="${note.date}"/>

    </div>
    <div class="flex gap-3 justify-center">
    <button id="close-modal-btn" class="bg-yellow-300 text-yellow-500">Cerrar</button>
    <button id="save-note-btn" class="save-note-btn bg-red-500 " data-index="${index}">save</button>
    </div></article>
  `;
  modal.showModal();

  document.getElementById("close-modal-btn").onclick = () => {
    modal.close();
  };
}
