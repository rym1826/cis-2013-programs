var $ = function (id) 
{
    return document.getElementById(id);
}

var calculateIncome = function () 
{
    var floatAnnualIncome = parseInt($("annualIncome").value);
    var intUserAge = parseInt($("age").value);
    var floatTaxRate, floatAnnualTax;
    if (intUserAge >= 65)

    	if (floatAnnualIncome <= 30000)
    	{
    		floatTaxRate = 2.5;
        }
    	else
    	{
    		if(floatAnnualIncome >= 30000 || floatAnnualIncome <= 75000)
    		{
    			floatTaxRate = 5;
    		}
    		else
    	{
    			floatTaxRate = 20;
    	}
    } 
    else
    {
    	
    	if (floatAnnualIncome <= 30000)
    	{
    		floatTaxRate = 5;
    	}
        else
        {
            if (floatAnnualIncome >= 30000 && floatAnnualIncome <= 75000)
            {
   			floatTaxRate = 10;
            }
            else
   		{
   			floatTaxRate = 20;
   		}
	    }


	floatAnnualTax = floatAnnualIncome * (floatTaxRate/100);

    }	
   
    $("annualTax").value = floatAnnualTax;




};

window.onload = function () 
{
    $("annualIncome").value = floatAnnualIncome;
    $("age").value = IntUserAge;
    $("annualTax").value = floatTaxRate;
    $("calculate").onclick = calculateIncome;
    $("annualIncome").focus();
}