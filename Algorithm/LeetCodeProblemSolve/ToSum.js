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

// Leet code problem 1
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
// console.log(twoSum([2, 7, 11, 15], 9)); // bigO O(n**2) space bigO O(1)

// leet code problem 11 
// const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];


const maxAreas = function (heights) {
    let totalWater = 0;
    const h = heights.length;

    for (let i = 0; i < h; i++) {
        for (let j = i + 1; j < h; j++) {
            // console.log(i, j);
            let height = Math.min(heights[i], heights[j]);

            // if (heights[i] > heights[j]) {
            //     // 
            //     height = heights[j];
            // } else {
            //     height = heights[i];
            // };
            // console.log(heights[i], heights[j], height);

            let width = j - i;
            let currentWater = height * width

            // if (totalWater < currentWater) {
            //     totalWater = currentWater;
            // }

            totalWater = Math.max(currentWater, totalWater);


        };
    };
    return totalWater;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

const maxAreaS = function (heights) {
    let totalWater = 0;
    const h = heights.length;
    for (let i = 0; i < h; i++) {
        for (let j = i + 1; j < h; j++) {
            let height = Math.min(heights[i], heights[j]);
            let width = j - i;
            let currentWater = height * width
            totalWater = Math.max(currentWater, totalWater);
        };
    };
    return totalWater;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); O(n^2)
// console.log(maxArea([1, 1]));



const maxArea = (heights) => {
    let totalWater = 0;
    let firstPointer = 0;
    let lastPointer = heights.length - 1;

    while (firstPointer < lastPointer) {
        let height = Math.min(heights[firstPointer], heights[lastPointer])
        let width = lastPointer - firstPointer;
        let currentWater = height * width;

        totalWater = Math.max(totalWater, currentWater);
        if (heights[firstPointer] <= heights[lastPointer]) {
            firstPointer++;
        } else {
            lastPointer--;
        }
    }
    return totalWater;

};


console.log(maxArea([1, 8, 6, 12]));
console.log(maxArea([1, 1]));





























