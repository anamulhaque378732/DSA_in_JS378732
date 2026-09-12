let arr = [67, 11, 12, 66];
// arr.sort();
// console.log(arr);

let nameD = ["bogura", "dhaka", "khulna", "joypurhat"];
// console.log(nameD.sort());
// console.log(arr.sort((a, b) => a - b));
// console.log(arr.sort((a, b) => b - a));

function bubbleSort(arr) {
  let isSwap;

  for (let i = 0; i < arr.length; i++) {
    isSwap = false;
    for (let j = 0; j < arr.length - 1; j++) {
      // console.log("to see", arr, arr[i], arr[j]);
      // console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort(arr)); // BigO(n**2)
