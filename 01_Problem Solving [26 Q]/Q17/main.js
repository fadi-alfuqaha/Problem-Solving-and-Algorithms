console.log("Problem Solving Q:17 ");

/* findFirstNonIterativedCharacter */

/*  
Given an arbitrary input string, return the first Non Iteratived character. For strings with all repeats, return 'sorry'
*/

function findFirstNonIterativedCharacter(string) {
  arrayOfString = string.split("");
  let firstChar;
  for (let i = 0; i < arrayOfString.length; i++) {
    let key = false;
    firstChar = arrayOfString[i];
    for (let j = i + 1; j < arrayOfString.length; j++) {
      if (firstChar == arrayOfString[j]) {
        key = true;
      }
    }
    if (key == false) {
      return firstChar;
    }
  }
}

/* 
Examples:
findFirstNonIterativedCharacter('ABCDBIRDUP') // => 'A'
findFirstNonIterativedCharacter('ALABAMA') // => 'L'
findFirstNonIterativedCharacter('Uber for horses') // => 'U'
*/
