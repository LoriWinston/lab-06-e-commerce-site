import { cart } from './cart-data.js';
import { animals } from '../Products/data';

import { renderTableRow, getAnimalTotal } from './render-table-row.js';
import { findById } from '../utils.js';

let total = 0;

for (let item of cart) {
    const animal = findById(item.id, animal);

    const totalForThisAnimal = getAnimalTotal(item, animal);

    total = total + totalForThisAnimal;
    const tableRowDOM = renderTableRow(item, animal);

    table.append(tableRowDOM);

}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order Total: $${total}`;

tr.append(td1, td2, td3);

table.append(tr);