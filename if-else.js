function ourTrueorFalse(isItTrue)
{
    if(isItTrue)
    {
        return "Yes,its true";
    }

    else{
        return "No,its false";
    }
}

ourTrueorFalse(true);//"Yes,its true"


//comaprison with equality (==) operator

function ourTrueorFalse(val)
{
    if(val==5)
    {
        return "Yes,value is 5";
    }

    else{
        return "No,the value is not 5";
    }
}
ourTrueorFalse(5);//"Yes,value is 5"

//comparison with the strict equality(===) operator
 // 3 === 3 //true
 // 3==='3'//false,because with the === operator, we have no type conversion, but with == conversion takes place and so it would have returned true


//working with inequality operators
  // (!=) not equal with type conversion
  // (!==) not equal with no type conversion

  //logical and statement
  if(val>=25 && val<=30)
  {
     console.log("lies between 25 and 30");
  }
 
   //logical or statement
   if(val>=25 || val<=30)
   {
      console.log("lies maybe between 25 and 30");
   }

   //keep in mind the logical order in if else statements
   //eg: 3 is less than 10 and also less than 5, but we should check for 5 first so that it displays the same.
   

