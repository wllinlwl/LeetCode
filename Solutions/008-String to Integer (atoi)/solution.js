/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = 2147483647
const INT_MIN = -2147483648
var myAtoi = function(str) {
	str = str.trim();
    if(!/^(\d|[+-]\d)/.test(str)) {
        return 0;
    }
    var ans = 0;
    var i = /^\d/.test(str) ? 0 : 1;
    
    for(i; i < str.length; i++){
        if('0'>str[i] || '9'<str[i]){
            break;
        }
        ans = ans*10 + (str[i]-"0");
    }
    ans = str[0] === "-" ? -ans : ans;
    
    if(ans > INT_MAX) return INT_MAX;
    if(ans < INT_MIN) return INT_MIN;
	return ans;
}
