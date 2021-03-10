/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let strSet = new Set();
    for (let index = 0; index < s.length; index++) {
        let subStr = s.substr(index, s.length);
        strSet = new Set([...strSet, ...getSubStrSet(subStr)]);
    }

    let maxLength = 0;
    strSet.forEach(element => {
        if (element.length > maxLength) {
            maxLength = element.length;
        }
    });
    console.log(strSet);
    console.log(maxLength);
    return maxLength;
};

var getSubStrSet = function (s) {
    let subStrSet = new Set();
    let tempStr = '';
    for (const item of s) {
        if (tempStr.indexOf(item) === -1) {
            tempStr += item;
        } else {
            subStrSet.add(tempStr);
            tempStr = "";
            tempStr = item;
        }
    }
    subStrSet.add(tempStr);
    return subStrSet;
}

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("sajakf4hrwj");

// 最后一个用例超时
// output
/*
 Set { 'abc', 'b', 'bca', 'bc', 'cab', 'cb' }
3
Set { 'b' }
1
Set { 'pw', 'wke', 'w', 'kew', 'ew' }
3
Set {}
0
Set { 'dv', 'df', 'vdf', 'f' }
3
Set {
  'saj',
  'akf4hrwj',
  'aj',
  'jakf4hrw',
  'j',
  'kf4hrwj',
  'f4hrwj',
  '4hrwj',
  'hrwj',
  'rwj',
  'wj' }
8
 */