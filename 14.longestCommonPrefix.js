/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    console.log(strs);
    if (strs.length === 0) {
        return '';
    }
    let commonStr = ""
    let curPos = 0;
    while (true) {
        let thisPosFirstChar = ''; // 第一个字符串的第一个字符
        for (let index = 0; index < strs.length; index++) {
            if (curPos < strs[index].length) {
                if (index === 0) {
                    thisPosFirstChar = strs[index][curPos];
                } else {
                    if (strs[index][curPos] !== thisPosFirstChar) { // 某一个字符出现了不同
                        return commonStr;
                    }
                }
            } else {
                // 当前字符串长度到结尾了
                return commonStr;
            }
        }
        commonStr += thisPosFirstChar;
        curPos++;
    }
};

console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["aacaa", "aacab", "aaaaaaa"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

/**
[]

[ 'aacaa', 'aacab', 'aaaaaaa' ]
aa
[ 'dog', 'racecar', 'car' ]
 */