import {getData} from './server.js';
import {printData, resetTable, showError} from './print.js';

const getDataButton = document.querySelector('.starships__get-button');
const deleteDataButton = document.querySelector('.starships__delete-button');

const initButtons = () => {
  getDataButton.addEventListener('click', () => {
    getData((data) => printData(data), showError);
  });
  deleteDataButton.addEventListener('click', resetTable);
};

export {initButtons};
