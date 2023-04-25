const ALERT_SHOW_TIME = 2500;
const ERROR_STYLE = {
  'position': 'absolute',
  'width': '80%',
  'top': '35%',
  'left': '10%',
  'padding': '80px 20px',
  'backgroundColor': 'rgba(255, 35, 65, 0.95)',
  'border': '5px black solid',
  'borderRadius': '25px',
  'fontSize': '25px',
  'fontWeight': 'bold',
  'textAlign': 'center',
  'z-index': '10',
};
const STARSHIP_PARAMETERS = [
  'name',
  'starship_class',
  'max_atmosphering_speed',
  'hyperdrive_rating',
  'length'
];

const table = document.querySelector('.starships__table');
const newRowsFragment = document.createDocumentFragment();
const tableCap = document.querySelector('.table__cap');

const createNewCell = (data, parameter, row) => {
  const newCell = document.createElement('td');
  newCell.textContent = data[parameter];
  row.appendChild(newCell);
};

const addDeleteRowButton = (row) => {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('table__delete-row-button');
  deleteButton.addEventListener('click', () => {
    const starshipName = row.firstChild.textContent;
    const starships = JSON.parse(sessionStorage.starships);
    starships.results = starships.results.filter((starship) => {
      return starship.name !== starshipName;
    });
    sessionStorage.starships = JSON.stringify(starships);
    row.remove();

    if (!table.querySelector('.table__data-row')) {
      tableCap.classList.remove('table__cap--hidden');
    }
  });
  row.appendChild(deleteButton);
};

const createNewRow = (data) => {
  const newRow = document.createElement('tr');
  newRow.classList.add('table__data-row');
  STARSHIP_PARAMETERS.forEach((parameter) => {
    createNewCell(data, parameter, newRow);
  });
  addDeleteRowButton(newRow);
  newRowsFragment.appendChild(newRow);
};

const resetTable = () => {
  const dataRows = document.querySelectorAll('.table__data-row');
  dataRows.forEach((row) => row.remove());
  tableCap.classList.remove('table__cap--hidden');
  sessionStorage.removeItem('starships');
};

const printData = (data) => {
  if (data) {
    resetTable();
    sessionStorage.starships = JSON.stringify(data);
    data.results.forEach((starship) => {
      createNewRow(starship);
    });
    tableCap.classList.add('table__cap--hidden');
    table.appendChild(newRowsFragment);
  }
};


const showError = () => {
  const errorElement = document.createElement('div');
  errorElement.textContent = 'Не удалось получить данные';
  for (const property in ERROR_STYLE) {
    if (ERROR_STYLE) {
      errorElement.style[property] = ERROR_STYLE[property];
    }
  }
  table.append(errorElement);

  setTimeout(() => errorElement.remove(), ALERT_SHOW_TIME);
};

export {printData, resetTable, showError};
