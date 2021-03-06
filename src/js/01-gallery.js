import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('div.gallery');

const galleryCards = galleryItems.map(createGalleryCard).join('');
galleryList.insertAdjacentHTML('afterbegin', galleryCards);

function createGalleryCard({ description, preview, original }) { 
    return `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `
};

let gallerySlider = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
