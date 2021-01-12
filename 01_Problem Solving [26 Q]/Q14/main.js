console.log("Problem Solving Q:14 ");

/* ArrayCenter */

/*  
Given an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayCenter(arr) {
  let numberOfElements = arr.length;
  let sum = 0;
  if (numberOfElements % 2 == 0) {
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum / numberOfElements;
  } else {
    let middle = Math.floor(numberOfElements / 2);
    return arr[middle];
  }
}

/* 
Examples:
ArrayCenter([200,5,100]) // => 5
ArrayCenter([2,3,2,3,2]) // => 2
ArrayCenter([2,3]) // => 2.5
*/
