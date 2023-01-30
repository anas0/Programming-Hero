function startFan(){
    console.log("You should start the fan");
}
startFan();


// Parameter
function bringSingara(money){
    console.log('mama singara den: ', money);
}
bringSingara(100);


function sum(a, b, c, d){
    var sum = a + b + c + d;
    console.log(sum);
}
sum(2, 5, 11, 37);


// Return 
function add(num1, num2){
    var add = num1 + num2;
    return add;
}
var total = add(12, 27);
console.log("Total: ", total);