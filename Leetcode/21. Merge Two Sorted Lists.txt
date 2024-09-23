/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const mergedList = {val: 0, next:null}
    let tail = mergedList
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = {val:list1.val, next:null}
            list1 = list1.next
        } else {
            tail.next = {val:list2.val, next:null}
            list2 = list2.next
        }
        tail = tail.next
    }
    tail.next = list1 || list2
    return mergedList.next
};
