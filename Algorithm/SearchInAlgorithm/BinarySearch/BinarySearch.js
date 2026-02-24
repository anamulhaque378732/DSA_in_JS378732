
// binary Search

const arr = [4, 5, 6, 7, 8, 9, 16, 35, 87, 99, 10, 11, 12, 13, 14, 15, 16, 17, 18, 1];



function binarySearch(arr, value) {
    let arr1 = arr.sort((a, b) => a - b);
    // console.log(arr1);

    let start = 0;
    let end = arr1.length - 1;
    //let middle = Math.round((start + end) / 2);
    // console.log(middle)

    while (start <= end) {
        let middle = Math.round((start + end) / 2);
        if (arr1[middle] === value) {
            return middle
        };

        if (value > arr1[middle]) {
            start = middle + 1
        } else {
            end = middle - 1
        };
    };

    return -1

};

console.log(binarySearch(arr, 13));























