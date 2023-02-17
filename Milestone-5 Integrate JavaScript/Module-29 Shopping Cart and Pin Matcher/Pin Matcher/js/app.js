function getPin(){
    const pin = generatePin();
    const pinString = pin + '';

    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const showPin = document.getElementById('show-pin');
    showPin.value = pin;
});


document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumbersField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumbersField.value = '';
        }else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbersField.value = remainingDigits;
        }
    }else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumbersField.value = newTypedNumber;
    }
});


document.getElementById('submit').addEventListener('click', function(){
    const showPin = document.getElementById('show-pin');
    const currentPin = showPin.value;

    const typedNumbersField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumbersField.value;

    const pinSuccess = document.getElementById('pin-success');
    const pinFailure = document.getElementById('pin-failure');

    if(currentPin === typedNumbers){
        pinSuccess.style.display = "block";
        pinFailure.style.display = "none";

    }else{
        pinFailure.style.display = "block";
        pinSuccess.style.display = "none";

    }
});