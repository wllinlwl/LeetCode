/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    if(grid.length < 3 || grid[0].length < 3){
        return 0;
    }

    function getRow(i, j){
        return grid[i][j]+grid[i][j+1]+grid[i][j+2];
    }
    function getCol(i, j){
        return grid[i][j]+grid[i+1][j]+grid[i+2][j];
    }
    function checkRow(value, i, j){
        if(value === getRow(i+1, j) && value === getRow(i+2, j)){
            return true;   
        }
        return false;
    }
    function checkCol(value, i, j){
        if(value === getCol(i,j) && value === getCol(i,j+1) && value === getCol(i, j+2)){
            return true;
        }
        return false;
    }
    function checkDia(value, i, j){
        if(value === grid[i][j]+grid[i+1][j+1]+grid[i+2][j+2]
           && value === grid[i][j+2]+grid[i+1][j+1]+grid[i+2][j]){
            return true;
        }
        return false;
    }
    function checkNumber(row, col){
        for(var i = row; i < row+3; i++){
            for(var j = col; j < col+3; j++){
                if(grid[i][j] < 1 || grid[i][j] > 9){
                    return false;
                }
            }
        }
        return true;
    }
    var ans = 0, value;
    for(var i = 0; i < grid.length - 2; i++){
        for(var j = 0; j < grid[i].length - 2; j++){
            value = getRow(i, j);
            if(value < 0 || value >15){
                continue;
            }else if(!checkNumber(i,j)){
                continue;
            }else if(!(checkRow(value, i, j) && checkCol(value, i, j) && checkDia(value, i, j))){
                continue;
            }
            
            ans++;
        }
    }
    
    return ans;  
};