/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let eL = {val:-1, next:head}
    let l = eL
    let r = head
    let i = 0
    while(r) {
        if (i >= n) {
            l = l.next
        }
        r = r.next
        i++
    }
    l.next = l.next.next
    return eL.next
};