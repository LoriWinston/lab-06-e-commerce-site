import { cart } from './cart-data.js';
import { animals } from '../Products/data.js';
// ^^we need to get the animals list from data.js
import { renderTableRow } from './render-table-row.js';
// ^^ we need to get the renderTableRow function
import { findById } from '../utils.js';
// ^^ we need the findById function we created in utils



const table = document.getElementById('table');
// we create a table

for (let cartItem of cart) {
    // this is a loop, we want the cartItem from the cart
    const matchingAnimal = findById(cartItem.id, animals);
    //we want the findbyId to grab the cartItem's id from the animals list and give the matchingAnimal
    console.log(matchingAnimal);
    //console log to make sure it's giving the matchingAnimal
    const row = renderTableRow(cartItem, matchingAnimal);
    // we want to display the correct cartItem and matchingAnimal 
    table.append(row);
    //we want to put the row information into the table

}
