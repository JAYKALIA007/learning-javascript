//Testing objects for properties
/*The hasOwnProperty() method in JavaScript is used to check 
whether the object has the specified property as its own property.

 This is useful for checking if the object has inherited the property 
 rather than being it’s own.

 Parameters: This method accepts single parameter prop which holds
  the name in the form of a String or a Symbol of the property to test.

  Return Value: It returns a boolean value indicating whether the 
  object has the given property as its own property.

 */

 var myObj={
     firstName:"jay",
     secondName:"prakash",
     title:"kalia"
 }
 function checkForProperty(checkProperty)
{
    if(myObj.hasOwnProperty(checkProperty))
    {
        return myObj[checkProperty];
    }
    else{
        return "Not Found";
    }
}





