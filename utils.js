export function findById(id, array) {

    for (let item of array) {
        if (id === item.id) return item;


    }
}

export function calculateLineTotal(value1, value2) {
    return value1 * value2;


}

export function calculateOrderTotal(cart, animals) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {

        const lineItem = cart[i];

        const animal = findById(lineItem.id, animals);

        const lineTotal = calculateLineTotal(lineItem.quantity, animal.price);
        orderTotal = orderTotal + lineTotal;
    }
    return (orderTotal);
}