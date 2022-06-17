export const calcTotalPrice = items => items.reduce(function (accumulator, item) {
    return accumulator + Number(item.price.value);
}, 0);
export const randomQuantity = Math.floor(Math.random() * 10);