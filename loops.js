//while loops

var myArray1=[];
var i=0;
while(i<5)
{
    myArray1.push(i);
    i++;
}

//for loops

var myArray2=[];
for(var i=0;i<5;i++)
{
    myArray2.push(i);
}

//Iterate through an array with a for loop
var ourArray=[1,2,3,4,5,6]
var sum;
for(var i=0;i<ourArray.length;i++)
{
   sum += ourArray[i];//1+2+3+4+5+6
}


//Nested for loops

function multiplyAll(arr)
{
    var product=1;
    for (var i=0;i<arr.length;i++ )
    {
        for (var j=0;j<arr[i].length;j++)
        {
            product*=arr[i][j];
        }
    }
    return product;
}


//do-while loops
var myArray
var i=0;
do{
    myArray.push(i);
    i++;
}while(i<5)
