/**
 * @param {string} s
 * @return {number}
 * 
 * 本解法的解题思路 
 * 假设有abacd
 * abacd 第一个无重复子串 ab
 * bacd  第一个无重复子串 bacd
 * acd   第一个无重复子串 acd
 * cd    第一个无重复字串 cd
 * d     第一个无重复子串 d
 * 所以最长bacd 4
 */
 var lengthOfLongestSubstring = function (s) {
    let maxLongStr = '';
    for (let index = 0; index < s.length; index++) {
        let subStr = s.substr(index, s.length);
        let tempSubStr = getFirstSubStr(subStr); // 取字串
        if (maxLongStr.length < tempSubStr.length) { // 字串长度比较
            maxLongStr = tempSubStr;
        }
    }

    console.log("one of longest str is : '" + maxLongStr + "', length is " + maxLongStr.length);
    return maxLongStr.length;
};

// 只取出子字符串中第一个无重复的字串
var getFirstSubStr = function (s) {
    let tempStr = '';
    for (const item of s) {
        if (tempStr.indexOf(item) === -1) {
            tempStr += item;
        } else {
            return tempStr;
        }
    }
    return tempStr;
}

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("sajakf4hrwj");
lengthOfLongestSubstring("abacd");

// output

/*
one of longest str is : 'abc', length is 3
one of longest str is : 'b', length is 1
one of longest str is : 'wke', length is 3
one of longest str is : '', length is 0
one of longest str is : 'vdf', length is 3
one of longest str is : 'jakf4hrw', length is 8
one of longest str is : 'bacd', length is 4
*/
