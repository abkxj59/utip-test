const table = document.querySelector('.starships__table');
const newRowsFragment = document.createDocumentFragment();
const tableCap = document.querySelector('.table__cap');

const createNewRow = (data) => {
  const newRow = document.createElement('tr');
  newRow.classList.add('table__data-row');
  const nameCell = document.createElement('td');
  nameCell.textContent = data.name;
  const classCell = document.createElement('td');
  classCell.textContent = data.starship_class;
  const speedCell = document.createElement('td');
  speedCell.textContent = data.max_atmosphering_speed;
  const hyperdriveCell = document.createElement('td');
  hyperdriveCell.textContent = data.hyperdrive_rating;
  const lengthCell = document.createElement('td');
  lengthCell.textContent = data.length;
  newRow.appendChild(nameCell);
  newRow.appendChild(classCell);
  newRow.appendChild(speedCell);
  newRow.appendChild(hyperdriveCell);
  newRow.appendChild(lengthCell);
  newRowsFragment.appendChild(newRow);
};

const resetTable = () => {
  const dataRows = document.querySelectorAll('.table__data-row');
  dataRows.forEach((row) => row.remove());
  tableCap.classList.remove('table__cap--hidden');
};

const printData = (data) => {
  resetTable();
  data.results.forEach((starship) => {
    createNewRow(starship);
  });
  tableCap.classList.add('table__cap--hidden');
  table.appendChild(newRowsFragment);
};


const showError = () => {};

export {printData, resetTable, showError};
