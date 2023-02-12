document.getElementById('btn-withdraw').addEventListener('click', function(){
    console.log('anas');
    const withdrawAmount = document.getElementById('withdraw-amount');
    const newWithdraw = parseInt(withdrawAmount.value);

    if(isNaN(newWithdraw)){
        alert("Plese provide a valid number");
        withdrawAmount.value = "";
        return;
    }
    
    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previouswithdrawTotal = withdrawTotalAmount.innerText;
    const totalWithdraw = parseInt(previouswithdrawTotal) + parseInt(newWithdraw);
    withdrawTotalAmount.innerText = totalWithdraw;

    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotal = parseInt(balanceTotalAmount.innerText);

    if(newWithdraw > previousBalanceTotal){
        alert("Ato Taka Nai!!");
        withdrawAmount.value = "";
        return;
    }

    const totalBalance = previousBalanceTotal - newWithdraw;
    balanceTotalAmount.innerText = totalBalance;


    withdrawAmount.value = "";
});