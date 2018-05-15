/** 5. Longest Palindromic Substring
 * url: https://leetcode.com/problems/longest-palindromic-substring/description/
 * Description:
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: "cbbd"
 * Output: "bb"
 */

// 返回对称的字符数
var palindrome = function(s, left, right){
	while(left >=0 && right < s.length && s[left] === s[right]){
		left--;
		right++;
	}
	return right - left  - 1;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
	var start = 0, sl = 0;
	var len, len1, len2;
	for (var i  = 0; i < s.length; i++){
		len1 = palindrome(s, i, i);//奇数元素对称
		len2 = palindrome(s, i, i+1);//偶数元素对称
		len = Math.max(len1, len2);
		
		if ( len > sl){
			start = i - Math.floor((len -1)/2);
			sl = len;
		}
	}
	
	return s.substr(start, sl);
}
