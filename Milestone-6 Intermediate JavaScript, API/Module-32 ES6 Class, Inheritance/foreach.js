const friends = ['Jone sina', 'Jobbbar', "Tom cruse", 'Bismi'];
friends.forEach(friend => console.log(friend));

const products = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'Mobile', price: 80000},
    {id: 3, name: 'Watch', price: 15000},
    {id: 4, name: 'Tablet', price: 30000}
];
products.forEach(product => console.log(product.name));


// Filter 
const product = [
    {id: 1, name: 'Laptop', price: 45000},
    {id: 2, name: 'Mobile', price: 80000},
    {id: 3, name: 'Watch', price: 15000},
    {id: 4, name: 'Tablet', price: 30000}
];
const expensive = product.filter(p => p.price > 20000);
console.log(expensive);