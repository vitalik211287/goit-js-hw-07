// import SimpleLightbox from "./node_modules/simplelightbox";
// import SimpleLightbox from "../node_modules/simplelightbox/dist/simple-lightbox.esm";
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

addItemsToGallery.addEventListener('click', xxx);

function xxx(event) {
    event.preventDefault();
   
    if(event.target.nodeName !== "IMG" ) {return}
   new SimpleLightbox(".gallery a", {
     nav: true,
     captionType: `${event.target.getAttribute("alt")}`,
   });
    console.log(event.target);
}