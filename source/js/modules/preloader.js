const PRELOADER_DELAY = 500;
const PRELOADER_TRANSITION = 500;

const preloader = document.querySelector('.preloader');

const showPreloader = () => {
  preloader.classList.remove('preloader--hidden');
};

const hidePreloader = () => setTimeout(() => {
  preloader.classList.add('preloader--hiding');
  setTimeout(() => {
    preloader.classList.remove('preloader--hiding');
    preloader.classList.add('preloader--hidden');
  }, PRELOADER_TRANSITION);
}, PRELOADER_DELAY);


export {showPreloader, hidePreloader};
