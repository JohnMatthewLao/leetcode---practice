var maxArea = function(height) {
    let maxArea = 0;
    for(var i = 0 ; i < height.length ; i++) {
        let tallestEnd = 0;
        for(var j = height.length-1; j > i ;j--) {
            if(height[j] > tallestEnd) {
                tallestEnd = height[j] 
                let maxWaterHeight;              
                if(height[j] >= height[i]) {
                    maxWaterHeight = height[i]
                } else {
                    maxWaterHeight = height[j]
                }
                let currentMaxArea = (j-i) * maxWaterHeight;
                if(currentMaxArea > maxArea) {
                    maxArea = currentMaxArea
                }
            }
        }
    }
    return maxArea
};