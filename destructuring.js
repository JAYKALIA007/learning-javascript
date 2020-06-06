//use destructuring assignment to assign variables from objects
 var voxel={
     x:3.6,
     y:7.4,
     z:6.54
 }

 //old way to assign variables
var x= voxel.x;
var y=voxel.y;
var z= voxel.z;

//new way

const {x:a,y:b,z:c}=voxel;//a=3.6,b=7.4,c=6.54


//destructuring with nested objects

const LOCAL_FOREST={
    today:{min:72 ,max:83},
    tomorrow:{min:73.3,max:84.6}
};
//find max of tomorrow
const {tomorrow:{max: maxOfTomorrow}}=forecast;

//destructuring for assigning variables from arrays
//unlike destructuring of objects, we cant access the arrays in any desired order
//i.e, we can only access the value in array in order of the indices
const [z,x]=[1,2,3,4,5,6]
console.log(z,x);
//1
//2

//what if i have to access the 4th element in the array

const [z,x,,y]=[1,2,3,4,5,6]
console.log(y);//4


//reverse the contents of a variable
let a=8,b=6;
(()=>{
    "use strict"
    [a,b]=[b,a]
})();
console.log(a);
console.log(b);


//use destructuring assignment with rest operator
const source=[1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [ , ,...arr]=list;
    return arr
}
const arr=removeFirstTwo(source);
console.log(arr);[3,4,5,6,7,8,9,10]
console.log(source);[1,2,3,4,5,6,7,8,9,10]




