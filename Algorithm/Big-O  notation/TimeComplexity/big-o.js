function minLog(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// minLog(2); // tme Complexity = O(n)

function maxLog(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
// maxLog(8) //time complexity = O(1)
