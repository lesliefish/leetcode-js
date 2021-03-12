
//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 分别两个指针指向两个链表头部
    let pl1 = l1;
    let pl2 = l2;

    let head = new ListNode;
    let pHead = head; // result指针

    while (pl1 || pl2) { 
        while (pl1 && pl2) {
            if (pl1.val < pl2.val) {
                pHead.next = new ListNode(pl1.val, null);
                pl1 = pl1.next;
            } else {
                pHead.next = new ListNode(pl2.val, null);
                pl2 = pl2.next;
            }
            pHead = pHead.next;
        }

        while (pl1) {
            pHead.next = new ListNode(pl1.val, null);
            pHead = pHead.next;
            pl1 = pl1.next;
        }

        while (pl2) {
            pHead.next = new ListNode(pl2.val, null);
            pHead = pHead.next;
            pl2 = pl2.next;
        }
    }

    return head.next;
};

let l1 = new ListNode(1, new ListNode(2, null));
let l2 = new ListNode(2, new ListNode(4, null));

console.log(mergeTwoLists(l1, l2));