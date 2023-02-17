document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumber = document.getElementById('case-number');
    const previousNumberString = caseNumber.value;
    const previousNumber = parseInt(previousNumberString);
    const currentNumber = previousNumber + 1;
    caseNumber.value = currentNumber;

    const totalPrice = document.getElementById('total-price');
    const currentPrice = currentNumber * 59;
    totalPrice.innerText = currentPrice;
});


document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumber = document.getElementById('case-number');
    const previousNumberString = caseNumber.value;
    const previousNumber = parseInt(previousNumberString);
    const currentNumber = previousNumber - 1;
    caseNumber.value = currentNumber;

    const totalPrice = document.getElementById('total-price');
    const currentPrice = currentNumber * 59;
    totalPrice.innerText = currentPrice;
});