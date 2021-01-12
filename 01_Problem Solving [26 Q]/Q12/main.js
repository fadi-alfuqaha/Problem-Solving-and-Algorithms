console.log("Problem Solving Q: 12");

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

function reverseEachWord(sentence) {
  words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let newWord = words[i].split("");
    words[i] = newWord.reverse().join("");
  }
  return words;
}

/* 
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
