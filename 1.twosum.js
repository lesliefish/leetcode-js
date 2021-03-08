/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let outArr = [];
    nums.some((element, index) => {
        let needFindNum = target - element;
        let anotherIndex = nums.findIndex(findNum => findNum === needFindNum);
        if (anotherIndex != -1 && index != anotherIndex) {
            outArr = [index, anotherIndex];
            return true;
        }
    });

    return outArr;
};

console.log(twoSum([1, 2, 4, 6, 7, 8], 14));