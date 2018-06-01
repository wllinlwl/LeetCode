/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // area = min*(r-l)
    var ans = 0, min = 0;
    
    var l = 0, r = height.length-1;
    while(l<r){
        if(min < Math.min(height[l], height[r])){
            min = Math.min(height[l], height[r]);
            ans = Math.max(ans, min*(r-l));    
        }
        
        height[l] < height[r]? l++ : r--;
    }
    return ans;
};

var str = "0123123123123112512509141414012312312312311251250901231231231231125125090123123123123112512509";
console.log(parseInt(str));

