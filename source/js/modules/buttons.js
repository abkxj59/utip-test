import {getData} from './server.js';
import {printData, resetTable, showError} from './print.js';
import {resetSortFlag} from './sort.js';

const getDataButton = document.querySelector('.starships__button--get');
const deleteDataButton = document.querySelector('.starships__button--delete');

const initButtons = () => {
  getDataButton.addEventListener('click', () => {
    getData((data) => printData(data), showError);
    resetSortFlag();
  });
  deleteDataButton.addEventListener('click', () => {
    resetTable();
    resetSortFlag();
  });
};

export {initButtons};
