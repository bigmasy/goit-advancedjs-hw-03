import { onFormSubmit } from './js/pixabay-api.js';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onFormSubmit);
