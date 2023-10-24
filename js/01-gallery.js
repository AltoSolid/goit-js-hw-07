import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map((item, index) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
          data-index="${index}"
        />
      </a>
    </li>
  `)
  .join('');

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const largeImageUrl = event.target.parentNode.href;

    const lightbox = basicLightbox.create(
      `
        <img class="lightbox-image" src="${largeImageUrl}">
      `,
    );
    lightbox.show();
  }
});