/*
1.add event handler with the withdraw button
2.get Withdraw amount
3.Clear the withdraw field
4. get previous withdraw total
5. calculate total withdraw amount and set it to the withdraw total element
6.previous balance
7. calculate new balance and set it to the balance total element
*/

// Step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('withdraw button');

    // step - 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);

    // step-3
    withdrawField.value = '';

    // step-4:
    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceElemet = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElemet.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElemet.innerText = newBalanceTotal;

})