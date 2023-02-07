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

let result = gemsToDiamond(friendGem1, friendGem2, friendGem3);
console.log(result);