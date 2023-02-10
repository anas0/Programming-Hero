function getRed(){
    document.body.style.color = 'white';
}

document.getElementById('bg-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green'
    let text = document.getElementById('heading');
    text.innerText = "Hi Bismi!!!";
});

document.getElementById('btn-update').addEventListener('click', function(){
    let inputField = document.getElementById('input-field').value;
    let p = document.getElementById('input-text');
    p.innerHTML = inputField;
});