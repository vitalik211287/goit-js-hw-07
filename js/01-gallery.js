import { galleryItems } from "./gallery-items.js";

const { create, visible } = window.basicLightbox;
// Change code below this line

// создаю разметку

console.log(create, visible);
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

const addItemsToGallery = document.querySelector(".gallery");
addItemsToGallery.insertAdjacentHTML("beforeend", oneGallery);

//модалка

//добавляю слушателя при клике
const xxx = document.querySelector("a");

addItemsToGallery.addEventListener("click", (event) => {
  event.preventDefault();

  //     const targetEl = event.target;

  //     // const newImage =

  //   const modalRef = document.createElement("div");

  const instance = create(
    <div class="gallery__iteml">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </div>
  );
  instance.show();
  console.log(instance);

  //   const parentTargetEl = targetEl.closest(".gallery__link");
  //   console.log(parentTargetEl);
  //   if (!parentTargetEl) {
  //     return;
  //   }
  const xxx = event.target.dataset.source;
  console.log(xxx);
  //    xxx.classList.toggle("gallery__link:hover");
  console.log(event.target);
  //   console.log(event.currentTarget);
});
