function sumOfAll(n) {
  let total = 0; // executed 1 times

  for (let i = 0; i <= n; i++) {
    total += i; //  executed n times
  }
  return total; // executed 1 times
}

// Time complexity is depend on input size

//console.log(sumOfAll(100000));

function summation(n) {
  return ((n * (n + 1)) / 2)
};
//console.log(summation(100000));

/**
 * Time complexity 
 * O(n**2) Quadratic
 * 3n**2 +5n +1;
 * 
 */


function sumAll(n) {
  let total = 0;
  for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
      total += j;
    };
    total += i;
  };
  return total;
};
//console.log(sumAll(50));
// console.log(1 + 15 + 2 + 15 + 3 + 15 + 4 + 15 + 5 + 15);


/**
 *  Time complexity
 *  O(n**3) - cubic
 * 
 * 
 * 
 */


function addSum(n) {
  let total = 0;
  for (i = 1; i < n; i++) {
    for (j = 1; j < n; j++) {
      for (k = 1; k < n; k++) {
        total += k;
      }
      total += j;
    }
    total += i;
  };
  return total;
};

//console.log(addSum(5));

//  Space complexity: 
/**
 * O(1) -constant
 * O(n)- linear
 * O(log n)- logarithmic
 * 
 * 
 */


function multipleArray(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);// n

    };
  };
};
// time complexity = n*82


//console.log(multipleArray(5));


/*
* Constant don't matter
* O(2n)= O(n)
* O(100) = O(1)
* O(19n**2) = O(n**2)
*
*
*/
/**
 * Smaller terms don't matter
 * O(n+10)= O(n)
 * O(100n + 50)= O(n)
 * O(n**2+5n+8)=o(n**2)
 * 
 * 
 */








