/*You can use strict mode in all your programs. 
It helps you to write cleaner code, like preventing you from using 
undeclared variables.

"use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
*/


//we can mutate an array which is declared as a const
//to prevent data mutation we use Object.freeze.

const myObj={
    pi:3.141
}
Object.freeze(myObj);