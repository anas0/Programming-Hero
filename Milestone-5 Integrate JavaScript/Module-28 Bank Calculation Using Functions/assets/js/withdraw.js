// Step: 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step: 2
    const withdrawAmount = document.getElementById('withdraw-amount');
    const newWithdrawString = withdrawAmount.value;
    const newWithdraw = parseFloat(newWithdrawString);

    // Step: 3
    withdrawAmount.value = "";

    // Step: 4
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step: 5
    const newWithdrawTotal = previousWithdrawTotal + newWithdraw;
    withdrawTotal.innerText = newWithdrawTotal;

    // Step: 6
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step: 7
    const newBalanceTotal = previousBalanceTotal - newWithdraw;
    balanceTotal.innerText = newBalanceTotal;
});