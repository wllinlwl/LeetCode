/*
 * Backtracking.
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    var ans = [];
    helper(S, ans, 0);
    return ans;    
};

const INT_MAX = 2147483647;
function helper(S, ans, index){
    if(index === S.length && ans.length >= 3){
        return true;
    }
    var value = 0;
    for(var i = index; i < S.length; i++){
        if(value === 0 && i > index){ //Leading Zero isn't allowed.
            break;
        }
        value = value*10+ (S[i] - "0"); //parse to Int
        if(value > INT_MAX){
            break;
        }
        // OUT! F[i] + F[i+1] < F[i+2].
        if(ans.length >= 2 && ans[ans.length-2] + ans[ans.length-1] < value){
            break;   
        }
        // Catch! F[i] + F[i+1] = F[i+2].;
        if(ans.length <= 1 || ans[ans.length-2] + ans[ans.length-1] === value){
            ans.push(value);
            if(helper(S, ans, i+1)){
                return true;
            }
            ans.pop();   
        }
    }
    
    return false;
};
