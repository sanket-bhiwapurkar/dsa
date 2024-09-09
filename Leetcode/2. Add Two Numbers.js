/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let res = {}
    let tail = res
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        if (sum > 9) carry = 1
        else carry = 0
        tail.next = {val: sum % 10, next: null}
        tail = tail.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return res.next
};
