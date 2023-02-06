const phones = [
    {name: "Sumsung", camera: 12, storage: '64gb', price: 60000, color: "Yellow" },
    {name: "iPhone", camera: 24, storage: '32gb', price: 80000, color: "Silver" },
    {name: "LG", camera: 20, storage: '16gb', price: 45000, color: "Black" },
    {name: "Nokia", camera: 20, storage: '32gb', price: 30000, color: "White" }
];

function cheapestPhone(phones){
    let cheap = phones[0];
    for(let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if(cheap.price > phone['price']){
            cheap = phone;
        }
    }
    return cheap;
}

const mySelection = cheapestPhone(phones);

console.log(mySelection);