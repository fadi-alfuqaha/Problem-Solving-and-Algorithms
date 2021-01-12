console.log("Problem Solving Q:16 ");

/* evenAppearance */

/*  
Find the first item that appear an even number of times in an array.
*/

function evenAppearance(array) {
  let even_num = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      continue;
    } else {
      even_num = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] == even_num) {
          return even_num;
        }
      }
    }
  }
}

/* 
Examples:
evenAppearance([1,2,6,6]) // => 6
evenAppearance([1,2,9,8,8,6,6]) // => 8 
evenAppearance([1,9,7,3,6,6,8,9,9]) // => 6
*/
