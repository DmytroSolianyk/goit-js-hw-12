// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { searchImages } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';

document.addEventListener('DOMContentLoaded', initializeEventListeners);

function initializeEventListeners() {
  document
    .getElementById('search-form')
    .addEventListener('submit', onSearchFormSubmit);
}

async function onSearchFormSubmit(event) {
  event.preventDefault();

  const query = getQuery();
  if (query === '') {
    displayEmptyQueryError();
    return;
  }

  const gallery = document.getElementById('gallery');
  setGalleryLoading(gallery);

  try {
    const images = await searchImages(query);
    updateGallery(gallery, images);
  } catch (error) {
    handleError(error);
  }
}

function getQuery() {
  return document.getElementById('search-input').value;
}

function setGalleryLoading(gallery) {
  gallery.innerHTML = `<span class="loader"></span>`;
}

function updateGallery(gallery, images) {
  gallery.innerHTML = '';

  if (images.length > 0) {
    const galleryMarkup = createGalleryMarkup(images);
    gallery.innerHTML = galleryMarkup;

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
  } else {
    displayNoImagesError();
    clearQuery();
  }
}

function displayNoImagesError() {
  iziToast.error({
    message: `Sorry, there are no images matching your search query. Please try again!`,
    position: 'topRight',
  });
}

function displayEmptyQueryError() {
  iziToast.error({
    message: `Sorry, search input cannot be empty!`,
    position: 'topRight',
  });
}

function handleError(error) {
  console.error('Помилка при виконанні запиту:', error);
}

function clearQuery() {
  document.getElementById('search-input').value = '';
}
