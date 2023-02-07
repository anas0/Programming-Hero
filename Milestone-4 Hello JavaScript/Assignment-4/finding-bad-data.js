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

let result = findingBadData(arr);
console.log(result);