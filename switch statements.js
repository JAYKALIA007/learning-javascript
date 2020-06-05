function caseInswitch(val)
{
    var answer="";
    
    switch(val)
    {
        case 1: answer="alpha";
           break;
        case 2: answer="beta";
           break;
        case 3: answer="gamma";
           break;
        case 4: answer="delta";
           break;
        default:
                console.log("error");
    }
    return answer;
}
caseInswitch(1);

//cases are checked following the principle of strict inequality operator

//multiple identical options in switch statements are used when multiple inputs give the same answer,->we can solve this by not putting break statement
