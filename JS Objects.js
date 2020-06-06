//instad of using indices we use properties to access data

var ourDog={
    name:"Jalebi",
    legs:4,
    tails:1,
    friends:"everything",
    "his home":"my home",
    10:"reference"
};


//There are 2 main ways of accessing property of object
   //1.accessing object properties with dot notation
var Name=ourDog.name;//"Jalebi"
   //2.by using Bracket notation(required when the property has a space between them)
var home=ourDog["his home"]  ;//"my home"

//Accessing object properties with variables
var usingReference=10;
var gainigReference=ourDog[usingReference];//"reference"


//Updating object properties
ourDog.name="Doggo";
var newName=ourDog.name;//"Doggo"


//Add new properties to an object
 //using dot or bracket notation
 ourDog.bark1 = "bhau";
 ourDog[bark2]="woooof!"


 //Delete props from an object
 // delete property.value;
 delete ourDog.tails;


 




