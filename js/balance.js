document.getElementById('btn-deposit').addEventListener('click', function(){
    const deposit = document.getElementById('deposit-amount');
    const newDepositAmount= parseFloat(deposit.value);
    
    const depositTotal = document.getElementById('deposit-total');
    const previousDeposit= parseFloat(depositTotal.innerText);
    const currentDeposit = previousDeposit + newDepositAmount;
    deposit.value= '';
    if(isNaN(newDepositAmount)){
        alert('Provide a number');
        return;
    }

    depositTotal.innerText= currentDeposit;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);
    const currentBalance = previousBalance + newDepositAmount;

    balanceTotal.innerText= currentBalance;
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdraw = document.getElementById('withdraw-amount');
    const newWithdrAmount= parseFloat(withdraw.value);
    
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraw= parseFloat(withdrawTotal.innerText);
    withdraw.value= '';

    if(isNaN(newWithdrAmount)){
        alert('Provide a number');
        return;
    }

    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = parseFloat(balanceTotal.innerText);

    if (newWithdrAmount > previousBalance){
        alert(' You cannot withdraw more than your balance');
        return;
    }
    const currentWithdraw = previousWithdraw + newWithdrAmount;

    withdrawTotal.innerText= currentWithdraw;
    const currentBalance = previousBalance - newWithdrAmount;

    balanceTotal.innerText= currentBalance;
})

document.getElementById('logout').addEventListener('click', function(){
    window.location.href= 'index.html';
})