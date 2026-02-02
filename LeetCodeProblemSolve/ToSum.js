// Example-1

/**
 * Given an array of integers num and an integer target, return indices of the two numbers such that they add up to target.

* You may assume that each input would have exactly one solution, and you may not use the same element twice.

*  You can return the answer in any order
 * 
 * input =[2,7,11,15]
 * target =9
 * 
 */


const num = [11, 77, 2, 7, 11, 15, 8];
const target = 88;


// function twoSum(num, target) {

//     for (let i = 0; i < num.length; i++) {
//         for (let j = i + 1; j < num.length; j++) {
//             // console.log(num[i], num[j]);
//             if (num[i] + num[j] === target) {
//                 return [i, j];
//             };
//         };
//     };
//     return false;
// };
// console.log(twoSum(num, target));

function twoSum(num, target) {
    for (let i = 0; i < num.length; i++) { //n
        let remaining = target - num[i];
        for (let j = i + 1; j < num.length; j++) { //n
            if (remaining === num[j]) return [i, j]
        };
    };
    return false;
};
console.log(twoSum([2, 7, 11, 15], 9)); // bigO O(n**2) space bigO O(1)


















