var rotate = function(matrix){
    
    for (var i=0; i< matrix.length;i++){
      for(var j=0; j< matrix.length; j++){
        if(i===j){
          break;
        }
        var temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
    
    for (var k=0; k<n; k++){
      matrix[k].reverse();
    }
  
  };