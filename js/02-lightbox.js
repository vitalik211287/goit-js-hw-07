import { galleryItems } from "./gallery-items.js";

// Change code below this line

const oneGallery = createGallary(galleryItems);

function createGallary(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </div>`;
    })
    .join("");
}

const addItemsToGallery = document.querySelector(".gallery");
addItemsToGallery.insertAdjacentHTML("beforeend", oneGallery);

new SimpleLightbox(".gallery a.gallery__item", {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: '250'
  });
