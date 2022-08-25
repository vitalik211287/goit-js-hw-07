import { galleryItems } from "./gallery-items.js";

const { create, visible } = window.basicLightbox;
// Change code below this line


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

const addItemsToGallery = document.querySelector(".gallery");
addItemsToGallery.insertAdjacentHTML("beforeend", oneGallery);


addItemsToGallery.addEventListener("click", (event) => {
  event.preventDefault();
  const targetEl = event.target;
  // console.log(targetEl);
  if (targetEl.nodeName !== "IMG") {
    return;
  }
  const imageSrc = targetEl.dataset.source;
  const instance = create(
    `<div class="modal">
      <img
        class="modal__image"
        src="${imageSrc}"
        alt="${targetEl.getAttribute("alt")}"
      />
    </div>`
  );
  instance.show();
  console.log(instance);
  console.log(targetEl);
  // const
  const modalImgRef = document.querySelector(".modal__image");
  modalImgRef.addEventListener("click", instance.close);
  const keydownHandler = (event) => {
    console.log("click", event);

    if (event.key !== "Escape") {
      return;
    }
    instance.close();
    window.removeEventListener('keydown', keydownHandler)
  };
  window.addEventListener("keydown", keydownHandler);
  
});
