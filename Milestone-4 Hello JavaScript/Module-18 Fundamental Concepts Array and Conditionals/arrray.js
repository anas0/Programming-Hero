var ages = [23, 65, 95, 6, 11];
console.log(ages);
console.log(ages[2]);
console.log(ages.length);

ages[2] = 27;
console.log(ages);

var positionIndex = ages.indexOf(6);
console.log(positionIndex);

// push & pop 
ages.push(56);
console.log(ages);

ages.pop();
console.log(ages);

ages.pop();
console.log(ages);


// condition 

if(ages[3] >= 18){
    console.log("You can get a NID");
}else{
    console.log('You are under age');
}

console.log(6 != 6)