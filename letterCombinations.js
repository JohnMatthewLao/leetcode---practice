var letterCombinations = function(digits) {
    if(digits.length ===0){
        return [];
    }
    let obj = {'2':'abc', '3':'def', '4':'ghi', '5':'jkl', '6':'mno', '7':'pqrs', '8':'tuv', '9':'wxyz'}
    let combination = [];
    let traverse = (s,depth) =>{
        s = s || ''
        if(depth > digits.length-1 || s.length === digits.length) {
            combination.push(s);
            return;
        }
        console.log(obj[digits[depth]])
        for(var j = 0 ; j < obj[digits[depth]].length ; j++) {
            traverse(s + obj[digits[depth]][j],depth+1)
        }
    }
    traverse('',0)
    return combination
};

// i = digits
// o = combinations of letter associate with digit
// use recursion 
// loop through the digits and find the corresponding letters 
// loop through corresponding letters
