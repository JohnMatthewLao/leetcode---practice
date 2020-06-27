var permute = function(nums) {
    let combination = []
    let recursion = (array, newNums) => {
        if(newNums.length === 0) {
            combination.push(array.slice());
            return;
        }
        for(var i = 0; i < newNums.length; i++) {
            array.push(newNums[i])
            newNums.splice(i,1)
            recursion(array, newNums)
            newNums.splice(i,0, array.pop())
        }
    }
    recursion([],nums)
    return combination
};