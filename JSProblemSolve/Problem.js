// problem - 1

/**
 * make higher variable
 * make a lower variable
 * iterate the  whole array
 * let's check is there has any error
 * if higher variable has smaller number the our current number then will be our current element
 * if lower variable has bigger number then our current number then value will be our current element
 * return our higher and lower variable
 */

let temperature = [-4, 5, 6, 54, 4, 7, 8, "Anamul", 66, 88, 99, 54, 66];

function getHigherAndLower(arr) {
    let highestNumber = arr[0];
    let lowestNumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        // console.log(typeof arr[i]);
        if (typeof arr[i] !== "number") continue;

        if (highestNumber < arr[i]) {
            highestNumber = arr[i]
        };

        if (lowestNumber > arr[i]) {
            lowestNumber = arr[i];
        };

    };

    const difference = highestNumber - lowestNumber;
    return {
        highestNumber,
        lowestNumber,
        difference,
    };
};
//console.log(getHigherAndLower(temperature));

//Problem - 2 Character count 

const character = "Hello, I am Anamul, I am a web developer. I want to be remote job";


function characterCount(str) {
    let characterList = {};

    for (let i = 0; i < str.length; i++) {

        let char = str[i].toLowerCase();

        if (!/[a-z0-9]/.test(char)) continue // regular expression

        if (characterList[char] > 0) {
            characterList[char]++
        } else {
            characterList[char] = 1;
        }
    };
    return characterList;

};

console.log(characterCount(character));







