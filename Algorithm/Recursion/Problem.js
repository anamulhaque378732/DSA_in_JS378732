const arr = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function oddNumber(arr) {
  const arrOdd = [];
  const arrEven = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr.length === 0) return 0;
    if (arr[i] % 2 === 1) {
      // console.log(arr[i]);

      arrOdd.push(arr[i]);
    } else {
      arrEven.push(arr[i]);
    }
  }
  return {
    arrOdd,
    arrEven,
  };
}
// console.log(oddNumber(arr));

// Recursion way

function findOdd(arr) {
  let result = [];
  function helper(input) {
    if (input.length === 0) return 0;
    if (input[0] % 2 === 1) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(arr);
  return result.length;
}

console.log(findOdd(arr));
