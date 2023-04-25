import {showPreloader, hidePreloader} from './preloader.js';

const getData = (onSuccess, onFail) => {
  showPreloader();
  fetch('https://swapi.dev/api/starships/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onSuccess(data);
        hidePreloader();
      })
      .catch(() => {
        onFail();
        hidePreloader();
      });
};

export {getData};
