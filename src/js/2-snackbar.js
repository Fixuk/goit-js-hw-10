import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'fulfilled' ? resolve(delay) : reject(delay);
    }, delay);
  });

  promise
    .then(ms => {
      iziToast.show({
        message: `Fulfilled promise in ${ms}ms`,
        messageColor: '#fff',
        backgroundColor: '#59a10d',
        position: 'topRight',
        timeout: 5000,
      });
    })
    .catch(ms => {
      iziToast.show({
        message: `Rejected promise in ${ms}ms`,
        messageColor: '#fff',
        backgroundColor: '#ee3f3f',
        position: 'topRight',
        timeout: 5000,
      });
    });
});
