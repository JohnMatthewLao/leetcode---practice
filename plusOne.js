var plusOne = function(digits) {
    if(digits.length === 1 && digits[0] === 9) {
        return [1,0];
    }
    for(var i = digits.length-1 ; i >= 0 ; i--) {
        if(digits[i] === 9) {
            digits[i] = 0;
            if(i-1 === -1){
                digits.unshift(1);
                return digits
            }
        }else{
            digits[i] +=1;
            return digits
        }
    }
};