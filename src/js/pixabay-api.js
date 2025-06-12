import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createGallery } from './render-functions.js';

export function onFormSubmit(e) {
  e.preventDefault();

  const searchForm = e.target;
  const searchedQuery = searchForm.elements.user_query.value.trim();
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  const loader = document.querySelector('.loader');

  if (searchedQuery === '') {
    iziToast.warning({
      message: 'Please enter a search query.',
      position: 'topRight',
    });
    return;
  }

  const queryParams = new URLSearchParams({
    key: '50817296-2eab3913ceee07bc816ca0d08',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  loader.classList.add('js-loader');

  fetch(`https://pixabay.com/api/?${queryParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        message: `An error occurred: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      loader.classList.remove('js-loader');
    });
}
