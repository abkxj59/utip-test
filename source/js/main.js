import {initButtons} from './modules/buttons.js';
import {printData} from './modules/print.js';
import {initSort} from './modules/sort.js';

// // ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.starships) {
    printData(JSON.parse(sessionStorage.starships));
  }

  window.addEventListener('load', () => {
    initButtons();
    initSort();
  });
});
