var generateParenthesis = function(n) {
    let combination = [];
    recursion = (s,openCount, closeCount) =>{
        if(s.length === n+n) {
            combination.push(s);
            return;
        }
        if(openCount === n){
            recursion(s + ')', openCount, closeCount)
        } else if(closeCount === openCount){
            recursion(s + '(', openCount+1, closeCount)
        } else if(openCount > closeCount){
            recursion(s + '(', openCount+1, closeCount)
            recursion(s + ')', openCount, closeCount+1)
        }
    }
    recursion('', 0, 0)
    return combination;
};

    
// recursively adding the parenthesis
// if ) count is less than ( count then add (
// else recursively adding either of the ()