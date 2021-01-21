// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { animals } from '../Products/data.js';

import { renderAnimal } from '../Products/render.js';
import { calculateLineTotal, findById } from '../utils.js';
import { renderTableRow } from '../cart/render-table-row.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    /* eslint-disable */
    const expected = `<li class=\"wild-animals\"><h3 class=\"animal-name\">Jim</h3><img class=\"animal-image\" src=\"../assets/panda.jpg\"><p class=\"breed\">Bear</p><p class=\"color\">White</p><p class=\"mood\">Judgemental</p><p class=\"size\">hefty</p><p class=\"price\">7000</p><button value=\"1\">Come home with me!</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const panda = {
        id: 1,
        image: 'panda.jpg',
        breed : 'Bear',
        color: 'White',
        mood: 'Judgemental',
        size: 'hefty',
        price: 7000,
        name: 'Jim',
    };
    const actual = renderAnimal(panda);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('testing findById function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    /* eslint-disable */
    const expected = {
            id: 1,
            image: 'panda.jpg',
            species : 'bear',
            furColor: 'white',
            temperament: 'judgemental',
            size: 'hefty',
            price: 7000,
            name: 'Jim',
        }
    
    //Act 
    // Call the function you're testing and set the result to a const
    
    const actual = findById(1, animals);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('render table row', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    /* eslint-disable */
    const expected = '<tr><td>Jim</td><td>4</td><td>$28000</td></tr>'
    
    //Act 
    // Call the function you're testing and set the result to a const
    const animal = findById(1, animals);
    const actual = renderTableRow( {id: 3,quantity: 4}, animal);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});


test('calculate line total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    /* eslint-disable */
    const expected = 8
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateLineTotal(2, 4)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});