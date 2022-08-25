import { galleryItems } from "./gallery-items.js";
// Change code below this line


// создаю разметку

const oneGallery = createGallary(galleryItems);

function createGallary(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;
    })
    .join("");
}
// рендерю

const eddItemsToGallery = document.querySelector(".gallery");
eddItemsToGallery.insertAdjacentHTML("beforeend", oneGallery);

//добавляю слушателя при клике
 const xxx = document.querySelector("a");

eddItemsToGallery.addEventListener("click", (event) => {
  event.preventDefault();
  const targetEl = event.target;
  const parentTargetEl = targetEl.closest(".gallery__link");
  console.log(parentTargetEl);
    if (!parentTargetEl) {
      return;
    }
  //    xxx.classList.toggle("gallery__link:hover");
    console.log(event.target);
  //   console.log(event.currentTarget);
});
