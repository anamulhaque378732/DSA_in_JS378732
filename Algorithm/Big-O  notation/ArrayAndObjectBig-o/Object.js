const myObject = {
  channel: "CodeABC",
  instructor: "Anamul",
  videos: [4, 7, 8, 7, 8, 55],
};

// console.log(Object.keys(myObject)); // O(n)
// console.log(Object.values(myObject)); // O(n)
// console.log(Object.entries(myObject)); // O(n)

// console.log(myObject.hasOwnProperty("channel")); // O(1)

let myArray = ["Hello", "Sumona", "MyLove", "SweetHeart", "Anamul"];

const newName = myArray.unshift("Madam"); //o(n)
const perName = myArray.shift(); // O(n)
const nextItem = myArray.push("Raihan"); // O(1)
const deleteItem = myArray.pop(); // O(1)
const includes = myArray.includes("Sumona"); //O(n)
const thirtItem = myArray[2]; // O(1)
// console.log(thirtItem, includes);

//forEach /map /filter / reduce // o(n)
