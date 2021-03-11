/**
 * 方法1 翻转字符串看是否相等
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let xStr = x + '';
    let revStr = xStr.split('').reverse().join('');
    return xStr === revStr;
};

// 方法2 通过字符串前后一一对比判断
var isPalindrome2 = function (x) {
    let xStr = x + '';
    if (xStr.length <= 1) {
        return true;
    }
    let leftPos = 0;
    let rightPos = xStr.length - 1;
    while (leftPos < rightPos) {
        if (xStr[leftPos] !== xStr[rightPos]) {
            return false;
        }
        leftPos++;
        rightPos--;
    }
    return true;
};

console.log(isPalindrome(1112111));
console.log(isPalindrome2(1112111));