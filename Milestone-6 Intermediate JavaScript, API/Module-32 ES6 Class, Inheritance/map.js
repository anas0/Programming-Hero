const number = [12, 56, 87, 98, 44];
const half = number.map(n => n/2);
console.log(half);

const friends = ['Jone sina', 'Jobbbar', "Tom cruse", 'Bismi'];
const firstString = friends.map(friend => friend[0]);
console.log(firstString);

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'Mobile', price: 80000},
    {id: 3, name: 'Watch', price: 15000},
    {id: 4, name: 'Tablet', price: 30000}
];
const nameProducts = products.map(product => product.name);
console.log(nameProducts);