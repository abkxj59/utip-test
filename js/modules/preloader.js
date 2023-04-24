const preloader = document.querySelector('.preloader');

const showPreloader = () => {
  preloader.classList.remove('preloader--hidden');
};

const hidePreloader = () => {
  preloader.classList.add('preloader--hiding');
  setTimeout(() => {
    preloader.classList.remove('preloader--hiding');
    preloader.classList.add('preloader--hidden');
  }, 500);
};

export {showPreloader, hidePreloader};
