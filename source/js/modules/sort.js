import {printData} from './print.js';

const tableHead = document.querySelector('.table__head');

const toggleSortFlag = (cell) => {
  cell.classList.toggle('table__sorting-reverse');
  cell.classList.toggle('table__sorting');
};

const resetSortFlag = () => {
  tableHead.querySelectorAll('.table__sorting').forEach((element) => {
    element.classList.remove('table__sorting');
  });
  tableHead.querySelectorAll('.table__sorting-reverse').forEach((element) => {
    element.classList.remove('table__sorting-reverse');
  });
  sessionStorage.removeItem('sortColumn');
  sessionStorage.removeItem('sortReverse');
};

const checkingSortFlag = (cell, key) => {
  if (cell.classList.contains('table__sorting')) {
    toggleSortFlag(cell);
    sessionStorage.setItem('sortReverse', true);
  } else if (cell.classList.contains('table__sorting-reverse')) {
    toggleSortFlag(cell);
    sessionStorage.setItem('sortReverse', false);
  } else {
    resetSortFlag();
    cell.classList.add('table__sorting');
    sessionStorage.setItem('sortColumn', key);
    sessionStorage.setItem('sortReverse', false);
  }
};

const printSortFlag = () => {
  if (sessionStorage.sortColumn) {
    tableHead.querySelectorAll('th').forEach((cell) => {
      if (cell.textContent.replace(/ /g, '_').toLowerCase() === sessionStorage.sortColumn) {
        cell.classList.add('table__sorting');
        if (sessionStorage.sortReverse === 'true') {
          toggleSortFlag(cell);
        }
      }
    });
  }
};

const initSort = () => {
  tableHead.addEventListener('click', (evt) => {
    if (sessionStorage.starships) {
      const cell = evt.target;
      const starships = JSON.parse(sessionStorage.starships);
      const key = cell.textContent.replace(/ /g, '_').toLowerCase();

      checkingSortFlag(cell, key);

      const compareFunction = (a, b) => {
        let c;
        let d;
        switch (key) {
          case 'name':
          case 'starship_class':
            c = a[key].toLowerCase();
            d = b[key].toLowerCase();
            break;
          case 'length':
            c = Number(a[key].replace(',', ''));
            d = Number(b[key].replace(',', ''));
            break;
          case 'max_atmosphering_speed':
            c = Number(a[key].replace('km', '').replace('n/a', '0'));
            d = Number(b[key].replace('km', '').replace('n/a', '0'));
            break;
          default:
            c = Number(a[key]);
            d = Number(b[key]);
        }
        if (cell.classList.contains('table__sorting')) {
          if (c > d) {
            return 1;
          }
          if (c < d) {
            return -1;
          }
        }
        if (c > d) {
          return -1;
        }
        if (c < d) {
          return 1;
        }
        return -1;
      };

      starships.results.sort(compareFunction);
      printData(starships);
    }
  });

  printSortFlag();
};

export {initSort, resetSortFlag};
