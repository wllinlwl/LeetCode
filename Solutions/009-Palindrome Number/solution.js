/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;

    var a = x, b = 0;
    while(a>0){
        b = b*10+a%10;
        a=Math.floor(a/10);
    }    
    return (x === b);
};
