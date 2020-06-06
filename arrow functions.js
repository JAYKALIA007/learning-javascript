//use arrow functions to write concise anonymous functions

var myFunc=function() {//anonymous function 
    return new Date();
};

//whenever we have an anonymous function we can 
//convert it to an arrow fumction, as follows:

var myFunc=()=>{
    return new Date();
}
//we can shorten this even more

var myFunc=()=>new Date();


//arrow functions with parameters

const myConcat=(arr1,arr2)=>arr1.concat(arr2);

myConcat([1,2],[3,4,5]);//[1,2,3,4,5]

//higher order functions
 //filtering an array using array.filter()
const realNumberArray=[4,5,-6,-1,5,8,-9,55,36] 
const positiveNumberArray=realNumberArray.filter(num=>{num>0});


