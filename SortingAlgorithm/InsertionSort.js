const arr = [14, -12, 15, 78, 63, 2, 3, 65];

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            // console.log(i, j);
            if (arr[j] < arr[j - 1]) {
                // let temp = arr[j];
                // arr[j] = arr[j - 1];
                // arr[j - 1] = temp;

                // alternative way
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]

            } else {
                break;
            };
        };
    };
    return arr
};
// console.log(insertionSort(arr));  // bigO(n**2), space c bioO(1);


function fibonacci(n) {
    let a = 0, b = 1;
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(a);
        let next = a + b;
        a = b;
        b = next;
    }

    return result;
}

// console.log(fibonacci(30));
































