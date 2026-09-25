const dialog = document.getElementById("viewer");
const img = document.getElementById("viewer-img");
const title = document.getElementById("viewer-title");

document.querySelectorAll(".frame").forEach((button) => {
  button.addEventListener("click", () => {
    img.src = button.dataset.full;
    img.alt = button.querySelector("img").alt;
    title.textContent = button.dataset.title;
    dialog.showModal();
  });
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener("close", () => {
  img.removeAttribute("src");
});
