// Recursion

// function countDown(n) {
//     // way 1.
//     //     for (let i = n; i > 0; i--) {
//     //         console.log(i);
//     //     };
//     // way 2.
//     console.log(n);
//     n--
//     if (n > 0) {
//         countDown(n)
//     }
// };

// countDown(10);

function sumOfNumber(num) {
    // way 1.
    // let sum = 0;

    // for (let i = num; i > 0; i--) {
    //     sum += i;
    // };
    // console.log(sum);

    // way 2

    if (num < 0) {
        return 0;
    }
    return num + sumOfNumber(num - 1);
};
// console.log(sumOfNumber(10));



function sumOfNum(arr) {
    if (arr.length === 0) return 0;
    let rest = arr.slice(1);
    // console.log(rest);
    return arr[0] + sumOfNum(rest);

};

// time= bigO(n*n=n**2);
// space = bigO(n);


// console.log(input);


function sumOfNumArr(arr) {
    return helperFunction(arr, 0);
};

function helperFunction(arr, index) {
    if (arr.length === index) return 0;
    return arr[index] + helperFunction(arr, index + 1);
};


let input = new Array(8200).fill(2);

let dateNow = Date.now();
console.log(sumOfNum(input));
let DateFinish = Date.now();
// console.log(DateFinish - dateNow, "ms");


let Start = Date.now();
console.log(sumOfNumArr(input));
let End = Date.now();
// console.log(End - Start, "ms");

// Time : BigO (n); Space :BigO(n)








































