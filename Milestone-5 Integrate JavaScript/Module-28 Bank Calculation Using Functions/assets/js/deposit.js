document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-amount');
    
    const previousDepositTotal = getElementValueById('deposit-total');
    
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setElementValueById('deposit-total', newDepositTotal);
    
    const previousBalanceTotal = getElementValueById('balance-total');
    
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementValueById('balance-total', newBalanceTotal);
});