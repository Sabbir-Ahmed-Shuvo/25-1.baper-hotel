document.getElementById('deposite-button').addEventListener('click',function(){
    // console.log('click by deposite');
    var depositeInput = document.getElementById('deposite-input');
    var depositeTotal = depositeInput.value;
    var newdepositeTotal =parseFloat(depositeTotal);
    // current deposite 
    var currentDeposite = document.getElementById('current-deposite');
    var peviouscurrentDeposite= currentDeposite.innerText; 
    var peviouscurrentDepositeTotal = parseFloat(peviouscurrentDeposite);
    var depositeTotal = newdepositeTotal + peviouscurrentDepositeTotal;
    currentDeposite.innerText = depositeTotal;
    // update account balance 
    var balanceTotal = document.getElementById('blance-total');
    var newBlanceTotla = balanceTotal.innerText;
    var newsnewBlanceTotla = parseFloat(newBlanceTotla);
    var total = newsnewBlanceTotla + newdepositeTotal;
    balanceTotal.innerText = total;
    // remove input value 
    depositeInput.value = '';
    
})

   // ata baki ache //
   document.getElementById('withdraw-button').addEventListener('click',function(){
       var withdrawInput = document.getElementById('withdraw-input');
       var withdrawInputTotal = withdrawInput.value;
       var semitotal = parseFloat(withdrawInputTotal);
    //current withdraw
    var currentWithdraw = document.getElementById('current-withdraw');
    var peviousWithdraw = currentWithdraw.innerText;
    var peviousWithdrawTotal = parseFloat(peviousWithdraw)
    var total = peviousWithdrawTotal + semitotal;
    currentWithdraw.innerText = total;
    // update account
    var totalBlance = document.getElementById('blance-total');
    var anothertotal = totalBlance.innerText;
    var semitotal2 = parseFloat(anothertotal);
    var totalwithdraw = semitotal2 - semitotal;
    totalBlance.innerText = totalwithdraw;
    // delete value 
    withdrawInput.value = '';

   })