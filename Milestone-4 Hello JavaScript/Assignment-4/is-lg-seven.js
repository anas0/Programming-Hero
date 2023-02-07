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

let result = isLGSeven(number);
console.log(result);