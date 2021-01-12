console.log("Problem Solving Q: 10");

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(str) {
  let max_occurrences = 0;
  let occurrences = 0;
  for (let j = 0; j < str.length; j++) {
    let element = str[j];
    occurrences = 1;
    for (let i = j + 1; i < str.length; i++) {
      if (str[i] == element) {
        occurrences = occurrences + 1;
      }
      if (occurrences > max_occurrences) {
        max_occurrences = occurrences;
      }
    }
  }

  return max_occurrences;
}

/* 
Examples:
answer1('hello world') // => 3
answer1('hello world lol') // => 5
answer1('hello world lol woooow') // => 7
answer1('hello world lol wow www.com') // => 6
*/
