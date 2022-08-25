import { galleryItems } from "./gallery-items.js";

const { create, visible } = window.basicLightbox;
// Change code below this line

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

const addItemsToGallery = document.querySelector(".gallery");
addItemsToGallery.insertAdjacentHTML("beforeend", oneGallery);

addItemsToGallery.addEventListener("click", (event) => {
  event.preventDefault();

  const targetEl = event.target;
  if (targetEl.nodeName !== "IMG") {
    return;
  }

  // отримання url великого зображення

  const imageSrc = targetEl.dataset.source;

  // картинка модального вікна
  const instance = create(
    `<div class="modal">
      <img
        class="modal__image"
        src="${imageSrc}"
        alt="${targetEl.getAttribute("alt")}"
      />
    </div>`
  );

  // відчинення модального вікна
  instance.show();

  //зачинення модального вікна

  const modalImgRef = document.querySelector(".modal__image");
  modalImgRef.addEventListener("click", instance.close);

  //зачинення клавішею клавіатури
  const keydownHandler = (event) => {
    console.log("click", event);
    if (event.key !== "Escape") {
      return;
    }
    instance.close();

    //зняття слухача з клавіши клавіатури

    window.removeEventListener("keydown", keydownHandler);
  };
  window.addEventListener("keydown", keydownHandler);
});
