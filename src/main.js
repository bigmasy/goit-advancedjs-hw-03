import { onFormSubmit } from './js/pixabay-api.js';

const refs = {
  form: document.querySelector('.search'),
};

refs.form.addEventListener('submit', onFormSubmit);
