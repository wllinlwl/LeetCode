/**1. Two Sum
 * url: https://leetcode.com/problems/two-sum/description/
 * Descript:
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

/****************************************************************************/
// Solution: Hash table, Time: O(n), Space: O(n);
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target){
 	let dict = {};
 	nums.forEach( function(element, index) {
 		dict[element] = index;
 	});

 	for(let i = 0; i < nums.length; i++){
 		if(dict[target - nums[i]]){
 			return [i, dict[target-nums[i]]];
 		}
 	}

 	return [-1, -1];
 }

 // Solution2: if nums is ordered!!!!!! we can use "Sandwich Theorem"(夹逼定理)；
 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target){
	// nums.sort((x,y)=> x-y);
	let l = 0, r = nums.length-1;
	let value = 0;
	
	while(l < r){
		value = nums[l]+nums[r];
		if(value === target){
			return [l, r];
		}else if(value > target){
			value = target - nums[l];
			do{
				r--;
			}while(l < r && nums[r] > value);
		}else{
			value = target - nums[r]
			do{
				l++;
			}while(l < r && nums[l] < value);
		}
	}
	return [-1, -1];
}
