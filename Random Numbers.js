//generate a random number between 0 and 1
var myRandomNumber=Math.random();//could be 0 but not 1


//generate a random whole number
//we can do this using Math.floor because it rounds the random number to the nearest integer

var randomNumberBetween0and19=Math.floor(Math.random()*20);

//generate random whole numbers within a range

function randomInRange(ourMin,ourMax)
{
    var randomNumberBetweenRange=Math.floor(Math.random()*(ourMax-ourMin + 1)) + ourMin;
}

randomInRange(1,9);
