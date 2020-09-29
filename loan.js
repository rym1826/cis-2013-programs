var $ = function (id) 
{
    return document.getElementById(id);
}


/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
 var calculate = function()
 {
var floatMonthlyPayment, intLoanTerm, floatTotalCost;
    floatMonthlyPayment = parseFloat($("monthly_payment").value);
    intLoanTerm = parseInt($("loan_length").value);
    floatTotalCost = parseFloat(floatMonthlyPayment*intLoanTerm).toFixed(2); // calculates total cost by multiplying the monthly payment by the loan term
   ($("total_cost").value) = floatTotalCost; // outputs total cost value back to HTML form
 }
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
}