// 结点定义
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let resultArr = [];
    let pl1 = l1;
    let pl2 = l2;
    let overten = 0; // 两数相加超过10 是1 否则0
    while (pl1 && pl2) {
        let sum = (pl1.val + pl2.val) + overten;
        resultArr.push(sum % 10);
        overten = sum >= 10 ? 1 : 0;
        pl1 = pl1.next;
        pl2 = pl2.next;
    }

    // 如果l1没遍历完
    while (pl1) {
        let sum = pl1.val + overten;
        resultArr.push(sum % 10);
        overten = sum >= 10 ? 1 : 0;
        pl1 = pl1.next;
    }

    // 如果l2没遍历完
    while (pl2) {
        let sum = pl2.val + overten;
        resultArr.push(sum % 10);
        overten = sum >= 10 ? 1 : 0;
        pl2 = pl2.next;
    }

    // 最后相加的数超过10，要增加一位
    if (overten) {
        resultArr.push(1);
    }

    // 将结果数组转为ListNode对象
    let outObj = new ListNode;
    let tempObj = outObj;
    for (let index = 0; index < resultArr.length; index++) {
        tempObj.val = resultArr[index]
        tempObj.next = new ListNode;
        if (index == resultArr.length - 1) {
            tempObj.next = null;
        }
        tempObj = tempObj.next;
    }

    return outObj;
};

//test
var obj1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
var obj2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

console.log(addTwoNumbers(obj1, obj2));
