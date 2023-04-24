import {showPreloader, hidePreloader} from './preloader.js';

const getData = (onSuccess, onFail) => {
  showPreloader();
  fetch('https://swapi.dev/api/starships/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onSuccess(data);
        setTimeout(hidePreloader, 500);
      })
      .catch(() => {
        onFail();
        setTimeout(hidePreloader, 500);
      });
};

export {getData};
