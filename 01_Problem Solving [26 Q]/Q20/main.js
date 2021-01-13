console.log("Problem Solving Q: 20");

/* MaximumProductOfThree */

/*  
Write a function that accepts an array of integers and returns the Maximum product possible from three of those numbers.
*/

function MaximumProductOfThree(array) {
  let temp;
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return (
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
  );
}

/* 
Examples:
MaximumProductOfThree([2, 1, 3, 7]) // => 42
MaximumProductOfThree([0, 2, 3]) // => 0
MaximumProductOfThree([2, 3, 5]) // => 30
*/
