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
var addTwoNumbers = function (ll1, ll2) {

    while(l1.next)

    let overTen = 0;
    let minLen = l1.length < l2.length ? l1.length : l2.length;
    let outArr = [];
    for (let index = 0; index < minLen; index++) {
        const sum = l1[index] + l2[index] + overTen;
        //console.log(sum);
        overTen = sum >= 10 ? 1 : 0;
        const element = sum % 10;
        outArr.push(element);
    }
    //console.log(outArr);

    let theLongArr = l1.length > minLen ? l1 : l2;

    //console.log(theLongArr);
    //console.log(minLen - 1);
    for (let index = minLen; index < theLongArr.length; index++) {
        //console.log('aa');
        //console.log(theLongArr.length);
        const sum = theLongArr[index] + overTen;
        overTen = sum >= 10 ? 1 : 0;
        const element = sum % 10;
        outArr.push(element);
    }

    if (overTen === 1) {
        outArr.push(overTen);
    }
    //console.log(outArr);


    let outObj = {};
    let tempObj = outObj;
    for (let index = 0; index < outArr.length; index++) {
        tempObj.val = outArr[index];
        tempObj.next = {
            val: null,
            next: null
        };
        tempObj = tempObj.next;
    }

    console.log(outObj);
    return outObj;
};

var obj1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: null,
            next: null
        }
    }
}

var obj2 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: null,
            next: null
        }
    }
}
addTwoNumbers(obj1, obj2);