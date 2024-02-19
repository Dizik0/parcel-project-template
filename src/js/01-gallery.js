import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

console.dir(SimpleLightbox);

import { galleryItems } from './gallery-items.js';
const ulEl = document.querySelector('.gallery');

ulEl.innerHTML = galleryItems
  .map(e => {
    return `
    <li class="gallery__item">
   <a class="gallery__link" href="${e.original}">
      <img class="gallery__image" src="${e.preview}" alt="${e.description}" />
   </a>
</li>`;
  })
  .join('');

const onClick = e => {
  e.preventDefault();
  showModal();
};

const showModal = () => {
  ulEl.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
      gallery.close();
    }
  });
};

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
ulEl.addEventListener('click', onClick);
