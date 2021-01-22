export function renderTableRow(cartItem, product){
    // we make an empty tr and call it tableRow, createElement is creating DOMS
    const tableRow = document.createElement('tr');
    // we make an empty td and call it tableName
    const tableName = document.createElement('td');
    // we make an empty td and call it quantity
    const quantity = document.createElement('td');
    // we make an empty td and call it price
    const price = document.createElement('td');
    // we want to display the product name 
    tableName.textContent = product.name;
    // we want to display the quantity
    quantity.textContent = cartItem.quantity;
    // we want to get the total price from the product price times the cartItem quantity
    const totalPrice = product.price * cartItem.quantity;
    // we want to display the total price
    price.textContent = `$${ totalPrice }`;
    // we want to get the tableName, quantity, and price
    tableRow.append(tableName, quantity, price);
    // we want the function renderTableRow to take in the cartItem and product and give us a tableRow
    return tableRow;
}

