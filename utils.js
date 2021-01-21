export function findById(id, array) {

    for (let item of array) {
        if (id === item.id) return item;


    }
}

export function calculateLineTotal(value1, value2) {
    return value1 * value2;
}