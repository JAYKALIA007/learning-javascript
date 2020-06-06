//one line if else statement
// condition ? statement if-true : statement if-false;

function checkEqual(a,b)
{
    return a===b ? true : false;
}

checkEqual(1,2);//false


function checkSign(num){
    return num>0? "Positive Number" : num<0 ? "Negative" : "zero";
}

checkSign(0);//"zero"
