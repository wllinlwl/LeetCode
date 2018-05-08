/** 2.Add Two Numbers
 * url: https://leetcode.com/problems/add-two-numbers/solution/
 * Description:
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */

/****************************************************************************/
// Solution: Addition of List;
 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	var ret, cur;
	var inc = 0, sum = 0;
	
	while (l1 || l2 || inc) {
		sum = inc;
		if(l1){
			sum += l1.val;
			l1 = l1.next;
		}
		if(l2){
			sum += l2.val;
			l2 = l2.next;
		}

		inc = sum > 9 ? 1 : 0;
		var node = new ListNode(sum%10);
		if(ret){
			cur.next = node;
			cur = cur.next;
		}else {
			ret = node;
			cur = node;
		}
	}

	return ret;
}