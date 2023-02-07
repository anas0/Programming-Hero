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

let result = evenOdd(string);
console.log(result);