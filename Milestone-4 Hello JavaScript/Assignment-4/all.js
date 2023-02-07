/*------------
    Problem 1: Let’s play a mind game.
    ---------
    Description: This function take positive number as input. Then multiply 3 with this number then add 10 with it then divide the result with 2 and subtract 5 from total number. Then return total output. 
--------------*/

let positiveNumber = 33;

function mindGame(positiveNumber){
    if(typeof positiveNumber !== 'number' || positiveNumber < 0){
        return "You need to give a positive number as input";
    }

    let total = positiveNumber * 3;
    total += 10;
    total /= 2;
    total -= 5;

    return total;
}

let result1 = mindGame(positiveNumber);
console.log(result1);



/*------------
    Problem 2: Finding even or odd.
    ---------
    Description: This function take string as input. Then check the length of the string then if the length is even then the output is 'even' else the output will be 'odd'. 
--------------*/

let string = "Batch7";

function evenOdd(string){
    if(typeof string !== 'string'){
        return "You need to give a string as input";
    }

    let stringLength = string.length;
    if(stringLength%2 == 0){
        return 'even';
    }else{
        return 'odd';
    }
}

let result2 = evenOdd(string);
console.log(result2);



/*------------
    Problem 3: Is Less or Greater than seven.
    ---------
    Description: This function take number as input. Then check the difference between the number and 7. If the difference id less then 7 then return the difference. Or else return double of the input.
--------------*/

let number = 6;

function isLGSeven(number){
    if(typeof number !== 'number'){
        return "You need to give a number as input";
    }

    const luckySeven = 7;
    let outCome = number - luckySeven;

    if(outCome < luckySeven){
        return outCome;
    }
    else{
        return number * 2;
    }
}

let result3 = isLGSeven(number);
console.log(result3);



/*------------
    Problem 4: Finding Bad data
    ---------
    Description: This function take array as input. Then check the value of the array. then return total negative number of value in the array. 
--------------*/

const arr = [2, -5, -7, -13];

function findingBadData(arr){
    if(Array.isArray(arr) !== true){
        return "Input should be an array";
    }

    let data = 0;
    let badData = 0;
    
    for(let i = 0; i < arr.length; i++){
        data = arr[i];
        if(data < 0){
            badData++;
        }
    }

    return badData;
}

let result4 = findingBadData(arr);
console.log(result4);



/*------------
    Problem 5: Convert your gems into diamond
    ---------
    Description: This function take 3 number as input which are the amount of gem the friends have. Then calculate total number of diamond according to the friend's capability.Now we need to check if ht total number is 'more then double of 1000'. Then return subtract 2000 from total number. However if total number is 'less then double of 1000' then return total number of diamond. 
--------------*/

let friendGem1 = 100;
let friendGem2 = 5;
let friendGem3 = 1;


function gemsToDiamond(friendGem1, friendGem2, friendGem3){
    if(typeof friendGem1 !== 'number' || typeof friendGem2 !== 'number' || typeof friendGem3 !== 'number'){
        return "Please provide all input as number";
    }

    const friendDiamond1 = 21;
    const friendDiamond2 = 32;
    const friendDiamond3 = 43;
    let totalDiamond = (friendDiamond1 * friendGem1) + (friendDiamond2 * friendGem2) + (friendDiamond3 * friendGem3);

    if(totalDiamond > 1000*2){
        return totalDiamond - 2000;
    }else{
        return totalDiamond;
    }
}

let result5 = gemsToDiamond(friendGem1, friendGem2, friendGem3);
console.log(result5);