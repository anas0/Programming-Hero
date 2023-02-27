function clickHandler(){
    console.log(this);
}

document.getElementById('click-me').addEventListener('click', function(){
    console.log(this);
});

