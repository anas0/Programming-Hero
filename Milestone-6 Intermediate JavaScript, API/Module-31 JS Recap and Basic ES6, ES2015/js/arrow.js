function add(first, second){
    return first + second;
}
console.log(add(10, 20));

const add1 = function(first, second){
    return first + second;
}

console.log(add1(10, 30));

const add2 = (first, second) => first + second;

console.log(add2(10, 40));


// No parameter arrow function 
const getPie = () => 3.14;

// One parameter
const doubleIt = (num) => num * 2;

// One parameter simple version
const fiveTimes = num => num * 5;
console.log(fiveTimes(5));

// Multi line arrow function 
const doMath = (x, y, z) => {
    const sum1 = x + y;
    const sum2 = sum1 + z;
    return sum2;
}
console.log(doMath(5, 8, 4));

// Problem
const checkLength = (frindNames) => {
    const arr = [];
    for(const frindName of frindNames){
        if(frindName.length % 2 == 0){
            arr.push(frindName);
        }
    }  
    return arr;  
}
const frindNames = ['abul', 'babul', 'kalam', 'mokbul'];
console.log(checkLength(frindNames));

