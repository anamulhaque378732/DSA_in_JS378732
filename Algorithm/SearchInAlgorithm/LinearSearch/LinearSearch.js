

const arr = [4, 5, 6, 7, 8, 9, 8, 7, 5, 6, 5, 4, 5, 44, 55, 45];

function linearSearch(arr, value) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    };
    return -1
};
console.log(linearSearch(arr, 55));


































