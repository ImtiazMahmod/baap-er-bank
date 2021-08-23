/// diposit and withdraw money
document.getElementById('deposit-btn').addEventListener('click',function(){

    // get amount to deposit
    const depositInput = document.getElementById('deposit-input');
        //input as text
    const depositInputText = depositInput.value;
        //convet to float
    const depositInputAmount = parseFloat(depositInputText);
    
    /// deposit balance 

         //get total deposit
    const depositTotal = document.getElementById('deposit-total');
        //get total deposit text
    const oldDepositTotalText =depositTotal.innerText;
        //convert text to float
    const oldDepositTotalAmount = parseFloat(oldDepositTotalText);
    
        // sum old amount and new input amount
    const updateDepositTotal = depositInputAmount + oldDepositTotalAmount; 

        // total amount as innertext
     depositTotal.innerText = updateDepositTotal;

    //total balance for deposit

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;

    const balanceTotalAmount = parseFloat(balanceTotalText);

    /// sum new deposit and balance
    const updateBalanceTotal = depositInputAmount + balanceTotalAmount;

    balanceTotal.innerText = updateBalanceTotal;
    // clear input 
    depositInput.value = '';

})

//withdraw balance
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawInputText = withdrawInput.value;
        //convert to float number
    const withdrawInputAmount = parseFloat(withdrawInputText);

    ///withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')
    
    // withdrawTotal as text
    const withdrawTotalText = withdrawTotal.innerText;

    const oldWithdrawTotalAmount = parseFloat(withdrawTotalText);

    //sum old and new input withdraw 
    const newWithdrawTotalAmount = oldWithdrawTotalAmount + withdrawInputAmount;

    //set new total withdraw

    withdrawTotal.innerText = newWithdrawTotalAmount;

    ///for withdraw change in total balance

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;

    const balanceTotalAmount = parseFloat(balanceTotalText);

    ///new balance 
    const updateBalanceTotal = balanceTotalAmount - withdrawInputAmount;

    balanceTotal.innerText = updateBalanceTotal;   
    
    // clear withdraw input
    withdrawInput.value = '';

})


