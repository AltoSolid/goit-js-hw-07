import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryHTML = galleryItems
  .map((item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `)
  .join('');

gallery.innerHTML = galleryHTML;

// Include the SimpleLightbox library using the <script> tag
const lightboxScript = document.createElement('script');
lightboxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.2/simple-lightbox.min.js';
lightboxScript.onload = initializeLightbox;
document.body.appendChild(lightboxScript);

function initializeLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250, // 250 milliseconds delay for captions to appear
  });
}