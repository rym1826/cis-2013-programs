//Simple function used to access elements on the html DOM
var $ = function (id) 
{
    return document.getElementById(id);
};

// Main program function that accepts user input for the total number of the
//Fibonacci series to show and the then runs a loop to create the output

var generate = function () 
{
	var intCount, i, j, k, stringOutput; //declare all the input variables
    
    i=0; //first number in the series will be 0
    j=1; //second number in the series will be 1
    stringOutput = i + " " + j; //output the first 2 number of the Fibonacci series
    
    intCount = parseInt($("total_fib").value); //gets the user input from the DOM
    /*
     *The if else statements verifies the user input is from 1 to 100 and will accordingly calculate the output based on the user's input meeting the criteria
     */
    
    if (isNaN(intCount)||intCount<1||intCount>100)
    {
        $("total_fib").value = "";
        $("output").value = "Please enter a valid input"; //validating user input
        alert ("You must enter a number between 1 and 100"); //the user must enter a number between 1 and 100.
    }
    else
    {
        while (intCount >2)
        {
            k=i+j; //k is calculated by adding i+j and represents the next Fibonacci number
            i=j; //i is set to current j value
            j=k; //j is set to current k value
            intCount--; //decrement 
            stringOutput = stringOutput + " " + k; //output thee series of Fibonacci numbers based on input from user.
        }
        $("output").value = stringOutput; // Push solution back to Output through DOM
    }
    
    

}; 



window.onload = function () 
{
    $("total_fib").value = "";
    $("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
};


    
    
    