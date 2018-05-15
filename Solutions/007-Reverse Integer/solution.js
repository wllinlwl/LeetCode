/**
 * @param {number} x
 * @return {number}
 */
const INT_MAX = 2147483647;
const INT_MIN = -2147483648;
var reverse = function(x) {
    if(x===0) return 0;
    var value = 0;
    
    var str = Math.abs(x).toString();
    for(var i = 0; i < str.length; i++){
        value += parseInt(str[i])*Math.pow(10, i);
    }
    value = x>0?value:-value;
    if(value > INT_MAX || value < INT_MIN){
        return 0;
    }
    
    return value;
}