// Space Complexity
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    };


    console.log(total);
};

//sum([4, 5, 7, 8, 9])// space complexity : o(1)


function double(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    };
    console.log(newArr);


};

double([4, 5, 6, 7, 8, 9])// Space complexity : o(n)




















































































