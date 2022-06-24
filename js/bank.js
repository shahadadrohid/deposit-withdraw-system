// Get Deposit Button Handler 
document.getElementById('deposit-button').addEventListener('click', function () {

    // Get Deposit input value 
    const newDepositInput = document.getElementById('input-deposit');
    const newDepositText = newDepositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // Set Deposit amount number 
    const currentDepositTotal = document.getElementById('deposit-total');
    const currentDepositText = currentDepositTotal.innerText;
    const currentDepositTotalAmount = parseFloat(currentDepositText);

    // Adding New and Current Deposit Value 
    const newDepositTotal = newDepositAmount + currentDepositTotalAmount;

    // Set new deposit value on the current deposit value 
    currentDepositTotal.innerText = newDepositTotal;

    // Get Balance amount Number 
    const totalBalance = document.getElementById('balance-total');
    const currentTotalBalanceText = totalBalance.innerText;
    const currentTotalBalanceAmount = parseFloat(currentTotalBalanceText);

    // Adding New input deposit amount and current total balance 
    const newBalanceTotal = currentTotalBalanceAmount + newDepositAmount;

    // Set new balance on the current balance 
    totalBalance.innerText = newBalanceTotal;

    // Clear Deposit Input 
    newDepositInput.value = '';
})

// Get Withdraw Button Handler 
document.getElementById('withdraw-button').addEventListener('click', function () {

    // Get new withdraw input value 
    const newWithdrawInput = document.getElementById('input-withdraw');
    const newWithdrawInputText = newWithdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawInputText);

    // Get current withdraw amount
    const currentWithdrawTotal = document.getElementById('withdraw-total');
    const currentWithdrawText = currentWithdrawTotal.innerText;
    const currentWithdrawTotalAmount = parseFloat(currentWithdrawText);

    // Adding New withdraw value and current withdraw value 
    const newWithdrawTotal = newWithdrawAmount + currentWithdrawTotalAmount;

    // Set the new withdraw value on the current withdraw value 
    currentWithdrawTotal.innerText = newWithdrawTotal;

    // Get current balance amount 
    const totalBalance = document.getElementById('balance-total');
    const currentTotalBalanceText = totalBalance.innerText;
    const currentTotalBalanceAmount = parseFloat(currentTotalBalanceText);

    // Subtraction from current balance to withdraw amount 
    const newBalanceTotal = currentTotalBalanceAmount - newWithdrawAmount;

    // Set new balance on the current balance amount
    totalBalance.innerText = newBalanceTotal;

    // Clear Current withdraw input 
    newWithdrawInput.value = '';
})