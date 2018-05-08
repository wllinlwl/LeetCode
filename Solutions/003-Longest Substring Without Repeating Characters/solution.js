/** 3. Longest Substring Without Repeating Characters
 * url: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * Description:
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. 
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */


// Solution: use a Sliding Window
 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	var tbl = Array(256).fill(-1);
	var start = 0, end = 0, ans = 0, val;
	for(end; end < s.length; end++){
		val = s[end].charCodeAt();
		if(tbl[val]<0 || tbl[val] < start){//char isn's in the window, caluculate the size of the window;
			ans = Math.max(ans, end-start+1);
		}else{//move start;
			start=tbl[val]+1;
		}
		tbl[val] = end;
	}

	return ans;
};