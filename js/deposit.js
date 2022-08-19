/*
1. Add event listener to the deposit button
2. get deposit amount from the deposit input field
2-5. convert string deposit amount to a number type
3. clear the deposit input field after getting the value
4. get the previous deposit total
5. Calculate new deposit total and set the value to the deposit total
6. get current blance
7. calculate the new balance and set it to the balance total element
*/

// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('Deposit click');
    // step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);

    // step-3
    depositField.value = '';

    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    // const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    console.log(newDepositAmount);
    depositTotalElement.innerText = newDepositTotal;

    // Step-6
    const blanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

    // Step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    blanceTotalElement.innerText = newBalanceTotal;
})