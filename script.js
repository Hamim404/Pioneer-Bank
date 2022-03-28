const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});





    const depositbtn=document.getElementById("addDeposit");
    depositbtn.addEventListener("click",function(){
        const depositAmount=document.getElementById("depositAmount").value;
        const depositNumber= parseFloat(depositAmount);
        const currentDeposit=document.getElementById("currentDeposit").innerText;
        const currentDepositNumber=parseFloat(currentDeposit);
        const total = depositNumber + currentDepositNumber;
        const currentBalance=document.getElementById("currentBalance").innerText;
        const currentBalanceNumber=parseFloat(currentBalance);
        const total2= depositNumber+ currentBalanceNumber;
        document.getElementById("currentBalance").innerText=total2;
        document.getElementById("currentDeposit").innerText=total;
        document.getElementById("depositAmount").value ="";



       
    })






    const withdrawbtn=document.getElementById("addWithdraw");
    withdrawbtn.addEventListener("click",function(){
        const withdrawAmount=document.getElementById("withdrawAmount").value;
        const withdrawAmountNumber=parseFloat(withdrawAmount);
        const currentWithdraw=document.getElementById("currentWithdraw").innerText;
        const currentWithdrawNumber=parseFloat(currentWithdraw);
        const total3=withdrawAmountNumber + currentWithdrawNumber;
        const currentBalance=document.getElementById("currentBalance").innerText;
        const currentBalanceNumber=parseFloat(currentBalance);
        const total4=currentBalanceNumber-withdrawAmountNumber;

        document.getElementById("currentBalance").innerText=total4;
        document.getElementById("withdrawAmount").value="";
        document.getElementById("currentWithdraw").innerText=total3;


    })

