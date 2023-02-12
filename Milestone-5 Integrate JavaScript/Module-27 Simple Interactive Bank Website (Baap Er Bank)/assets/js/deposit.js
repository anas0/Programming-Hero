document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-amount');
    const newDeposit = depositAmount.value;

    if(isNaN(parseInt(newDeposit))){
        alert("Plese provide a valid number");
        withdrawAmount.value = "";
        return;
    }
    
    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalAmount.innerText;
    const totalDeposit = parseInt(previousDepositTotal) + parseInt(newDeposit);
    depositTotalAmount.innerText = totalDeposit;

    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalAmount.innerText;
    const totalBalance = parseInt(previousBalanceTotal) + parseInt(newDeposit);
    balanceTotalAmount.innerText = totalBalance;


    depositAmount.value = "";
});