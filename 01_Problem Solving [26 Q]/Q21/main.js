console.log("Problem Solving Q: 21");

/* removeNotUnique */

/*  
Given a string, delete any characters that are not unique from the string.
*/

function removeNotUnique(string) {
  arrayOfString = string.split("");
  let indexes = [];
  for (let i = 0; i < arrayOfString.length; i++) {
    for (let j = i + 1; j < arrayOfString.length; j++) {
      if (arrayOfString[i] == arrayOfString[j]) {
        indexes.push(i);
        indexes.push(j);
      }
    }
  }
  return indexes;
}

/* 
Examples:
removeNotUnique('hello there') // => 'o tr'
removeNotUnique('xyz') // => 'xyz'
removeNotUnique('iiii') // => ''
*/
