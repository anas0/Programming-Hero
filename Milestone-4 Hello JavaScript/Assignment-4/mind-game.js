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

let result = mindGame(positiveNumber);
console.log(result);