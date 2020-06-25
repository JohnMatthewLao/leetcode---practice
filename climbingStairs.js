var climbStairs = function(n) {
    
    let prev = 1;
    let curr = 2;
    if(n < 4) {
        return n;
    }else{
        for(var i = 3 ; i <= n ; i++) {
            let sum = prev + curr
            prev = curr
            curr = sum
        }
    }
    return curr;
};