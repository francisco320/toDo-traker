const dialog = document.getElementById("modal");
const openBtn = document.getElementById("open");
const closeBtn = document.querySelector(".close");
const addBtn = document.querySelector(".addBtn");

export function openAndClose() {
  // Abrir el modal en modo bloqueante
  openBtn.addEventListener("click", () => dialog.showModal());

  // Cerrar el modal
  closeBtn.addEventListener("click", () => dialog.close());
  addBtn.addEventListener("click", () => dialog.close());
}
