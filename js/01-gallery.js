import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function markup() {
    return galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    
    />
  </a>`).join('');
    }

galleryEl.insertAdjacentHTML("beforeEnd", markup());

galleryEl.addEventListener("click", openModal)

function openModal(evn) {
    const instance = basicLightbox.create(`
	<img src="${evn.target.dataset.source}">
`)
    instance.show()
    console.dir(evn.target.dataset.source);
    evn.preventDefault()  
    galleryEl.addEventListener("keydown", event => {
  if (event.code === "Escape") {instance.close()}  
});
}


