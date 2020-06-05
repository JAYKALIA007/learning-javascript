var mystr1="Jay"
var myStr2="Prakash"
var concatString=myStr1+myStr2;

//concat using plus equals operator
var mystr="This is the first sentence. ";
myStr+="This is the second sentence";

//concat using variables
var newStr="Jay Prakash";
var newstr2="My name is " + newStr + ". I am front end dev";

//appending variables to Strings

var hello="Hello";
var world="World";
hello+=world; //"HelloWorld"

//find length of string
var myName="Jay Prakash"
var myNameLength=myName.length;//returns an integer which shows the number of characters in the string


//bracket notation to get a character at a specified index of string
var firstLetterOfName=nyName[0];//J

//String immutability
  //strings are immutable, that is once defined the original string cannot be changed but we can add it to it 
 
  var myStr="Jello World";
  myStr[0]="H";//error, coz immutable
  //So we have to make the changes as follows
  myStr="Hello World";//works

  //bracket notation to find the nth string
  //by using index number
  
  //forlast name we can use the following
  var name="Jay Prakash"
  var lastLetterOfName=name[name.length-1]; 

