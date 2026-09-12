// Time and Space Complexity

function uniqueName(arr) {
  let uniqueName = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (!uniqueName.includes(ele)) {
      uniqueName.push(ele);
    }
  }
  return uniqueName;
}
// timeComplexity : O(n**2)
// SpaceComplexity : O(n)

let nameArray = [
  "Rafi",
  "Anamul",
  "Sumona",
  "Raihan",
  "Anamul",
  "Sumona",
  "Rafi",
  "Raihan",
  "Moyazzem",
];

console.log(uniqueName(nameArray));
