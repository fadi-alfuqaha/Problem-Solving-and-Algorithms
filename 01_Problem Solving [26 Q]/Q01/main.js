console.log("Problem Solving Q: 1 ");

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function longestWord(sen) {
  let res = sen.split(" ");
  let longestWord = res[0];
  for (let i = 1; i < res.length; i++) {
    if (res[i].length > longestWord.length) {
      longestWord = res[i];
    }
  }
  return longestWord;
}

/* 
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/
