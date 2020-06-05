//Write reusable code with functions

 function ourReusableFunction()
 {
     console.log("hello world");
 }

 ourReusableFunction();//hello world

 
 
 //passing values to functions with arguments
 function ourFunctionWithArgs(a,b)//a and b act as placeholders
 {
     console.log(a-b);
 }

 ourFunctionWithArgs(10,5);//5


 //GlobalScope and functions
   //variables outside the functions are called as globasl varibales

//NOTE
function f1()
{
    var oopsGlobal=5;//local variable,but if we would have defined wihtout the var, then it would be a global variable
}
function f2()
{
    oopsGlobal=5;//global variable
}



//LocalScope and functions
function f3()
{
    var myVar=5;
    console.log(myVar);
}
f3();//5
console.log(myVar)//error undefined

 //returning a value

 function minusSeven(num)
 {
     return num-7;
 }
minusSeven(20);//13
