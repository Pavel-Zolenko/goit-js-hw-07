import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

function markup() {
    return galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title ="${description}" />
</a>
</div>`
    ).join('');
    }

galleryEl.insertAdjacentHTML("beforeEnd", markup());

    let gallery = new SimpleLightbox('.gallery a', {captionPosition: "bottom", captionDelay: 250});
gallery.on('show.simplelightbox', function () {
	
});

