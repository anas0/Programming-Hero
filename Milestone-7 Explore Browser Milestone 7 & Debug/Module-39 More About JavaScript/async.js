console.log(1);
console.log(2);
fetch('https://openapi.programming-hero.com/api/ai/tool/01')
    .then(res => res.json())
    .then(data => console.log(data));
console.log(4);
console.log(5);
setTimeout(doSomething);
console.log(7);

function doSomething(){
    console.log(6);
}