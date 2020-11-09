/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */
var intMax, intMin, intRandom, intGuess, intCount; //declaring the variables in the program
var intMin = parseInt(prompt("Please enter a number 0 or greater for your minimum number."));    //user must enter a number that is 0 or more
while (isNaN(intMin)||intMin <0) {
    intMin = parseInt(prompt("Invalid Entry. Please enter a number greater or equal to 0 for your minimum number.")); //user will be prompted with an error with invalid input
}
var intMax = parseInt(prompt("Please enter a number which is at least " + (intMin +2) + " as your maximum number.")); //max number must be greater than minimum plus two.
while (isNaN(intMax)||intMax < (intMin +2)) {
    intMax = parseInt(prompt("Invalid Entry. Please enter a number greater than or equal to " + (intMin +2) + " for your maximum number."));
}
var intGuess = parseInt(prompt("Please enter a number between " + intMin + " and " + intMax));    
while (isNaN(intGuess)||intGuess < intMin || intGuess > intMax) {
    intGuess = parseInt(prompt("Invalid Entry. Please choose a number between " + intMin + " and " + intMax)); /* this section prompts the user to enter their guess and verifies
 *  that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/
}

/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin); /*This line of code generates the random number to be used in the guessing game
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */
intCount = 1;
while (intGuess != intRandom)
{
    if (intGuess < intRandom)
    {
        alert("Your guess of " + intGuess + " is too low. Please guess again."); //this alert will pop up when the user's guess of the random number is too low
        
    }
    else
    {
        alert("Your guess of " + intGuess + " is too high. Please guess again."); //this alert will pop up when the user's guess of the random number is too high
        
        }
    intCount++; //incrementing
     intGuess = parseInt(prompt("Please enter a number between " + intMin + " and " + intMax));    
while (isNaN(intGuess)||intGuess < intMin || intGuess > intMax)
{
    intGuess = parseInt(prompt("Invalid Entry. Please choose a number between " + intMin + " and " + intMax)); //the user must enter a number between the minimum and maximum.
}
}
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!"); //this alert will pop up letting the user know they have guessed the correct number with the number of attempts.



