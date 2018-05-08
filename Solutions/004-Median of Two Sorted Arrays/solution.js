/* 4.Median of Two Sorted Arrays   
 * ulr:https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 * Description:
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 * The median is 2.0
 *
 * Example 2:
 * nums1 = [1, 2, 3, 4]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 */

/*
 * Solution: we need to understand the concept of median.
 * Step1: As one array A, we cut it to Lfet part, median and Right part, Just like that:
 * 		A = [Left-Part, Median, Right-Part]
 *		A.length is uneven:  [L1, L2, .... Ln, median, R1, R2, ...., Rn];
 *  	A.length is even:  [L1, L2, .... Ln, median1, median2, R1, R2, ...., Rn];
 * 	then we can get the divid part's number is Math.ceil(N/2)-1.
 *
 * Step2: This probelm has tow sorted arrays, A and B
 * 		we nend to cut A and B, get the left-part of two arrays;
 *		A: [a1, a2,  ... left_A, .....]
 *		B: [b1, b2, b3, ... left_B, .....]
 *		make left_A + left_B === Math.ceil((A.length+B.length)/2)-1.
 * 		then we can find the median.
 */
 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var check = function(val){
	return val === undefined ? Infinity : val;
}

var findMedianSortedArrays = function(nums1, nums2) {
	var n = Math.ceil((nums1.length + nums2.length)/2)-1; //divid L's count,    
	var n1 = 0, n2 = 0, ans = 0; 
	while((n1+n2) < n){// move n1 n2, make L1 + L2 == N;
		check(nums1[n1]) < check(nums2[n2]) ? n1++ : n2++;
	}
	if((nums1.length+nums2.length)%2){//if N is uneven number, get next min number;
		ans = Math.min( check(nums1[n1]), check(nums2[n2]));
	}else{//If N is even Number, get two min number;
		ans = check(nums1[n1]) <= check(nums2[n2]) ? nums1[n1++] : nums2[n2++];
		ans += check(nums1[n1]) <= check(nums2[n2]) ? nums1[n1] : nums2[n2];

		ans = ans/2;
	}

	return ans
}; 