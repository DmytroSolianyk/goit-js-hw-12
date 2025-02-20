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

let page = 1;
let per_page = 40;
let currentQuery = '';

document.addEventListener('DOMContentLoaded', initializeEventListeners);

function initializeEventListeners() {
  document
    .getElementById('search-form')
    .addEventListener('submit', onSearchFormSubmit);
  document.getElementById('load-more').addEventListener('click', async () => {
    setIsLoadMore(false);
    page++;
    await fetchImages(currentQuery);
    smoothScroll();
  });
}

async function onSearchFormSubmit(event) {
  event.preventDefault();
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  setIsLoadMore(false);
  page = 1;

  currentQuery = getQuery();
  if (currentQuery === '') {
    displayEmptyQueryError();
    return;
  }

  await fetchImages(currentQuery);
}

async function fetchImages(query) {
  const gallery = document.getElementById('gallery');
  setGalleryLoading(true);
  try {
    const data = await searchImages(query.trim(), page, per_page);
    updateGallery(gallery, data.hits);
    if (data.totalHits > page * per_page) {
      setIsLoadMore(true);
    } else if (data.hits.length > 0) {
      displayReachedEndError();
    }
  } catch (error) {
    handleError(error);
    setGalleryLoading(false);
  }
}

function getQuery() {
  return document.getElementById('search-input').value;
}

function setGalleryLoading(val) {
  if (val) {
    document.getElementById('loading').classList.remove('hidden');
  } else {
    document.getElementById('loading').classList.add('hidden');
  }
}

function setIsLoadMore(val) {
  if (val) {
    document.getElementById('load-more').classList.remove('hidden');
  } else {
    document.getElementById('load-more').classList.add('hidden');
  }
}

function updateGallery(gallery, images) {
  if (images.length > 0) {
    const galleryMarkup = createGalleryMarkup(images);
    gallery.innerHTML += galleryMarkup;

    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();

    setGalleryLoading(false);
  } else {
    displayNoImagesError();
    clearQuery();
    setGalleryLoading(false);
  }
}

function displayNoImagesError() {
  iziToast.error({
    message: `Sorry, there are no images matching your search query. Please try again!`,
    position: 'topRight',
  });
}

function displayReachedEndError() {
  iziToast.info({
    message: `We're sorry, but you've reached the end of search results.`,
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
  iziToast.error({
    message: error.code,
    position: 'topRight',
  });
}

function clearQuery() {
  document.getElementById('search-input').value = '';
}

function smoothScroll() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length > 0) {
    const cardHeight = galleryItems[0].getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
