/* Guessing Game by Jake Garrepy */
var totalTurns = 0;
var Games = 0;
var Average = 0;
var playAgain = "y";
// var (totalTurns = 0;var Games = 0;var Average = 0;var playAgain = "y";)




/*Start playing*/

do{
	var Answer = Math.floor(Math.random()*(99) + 1);
	alert(Answer);
	Turns = 0;
	do	{
		Guess =  prompt('Enter a guess 1-100');
		if (Guess > Answer){
		alert('too high');
		}
		else if (Guess < Answer) {
			alert('too low');
		}
		Turns ++;
		alert(Turns +'Turns')
	}
	while (Guess != Answer);
	alert('congratulations');
	Games++;
	playAgain = prompt("Would you like to play game "+Games++ +"? (y = Yes)")
}
while (playAgain == 'y')
/* End Playing*/