function toInteger(str)
{
    return parseInt(str);
}
toInteger("56"); //56

//Use the parseInt function with a Radix
  //convert a string at base 2(binary) to an integer type,i.e; base 10(decimal)
 
function convertToInteger(str)
{
    return parseInt(str,2);//default is base 10
}  

convertToInteger("10011");//19

  