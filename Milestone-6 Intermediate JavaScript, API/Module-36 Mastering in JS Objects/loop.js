const bottle = {color: 'yellow', price: 350, isCleaned: true, capacity: 1};

for(const key in bottle){
    console.log(key, bottle[key]);
}

// Advance
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of pair){
    console.log(key, value);
}