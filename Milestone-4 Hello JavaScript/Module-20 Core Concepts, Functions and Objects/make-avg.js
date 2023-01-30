function make_avg(numbers, size){
    var total = 0;
    for(var i = 0; i < size; i++){
        total += numbers[i]; 
    }
    var average = total / size;
    console.log(average);
}

var numbers = [2, 23, 35, 56, 11];
var size = numbers.length;
make_avg(numbers, size);