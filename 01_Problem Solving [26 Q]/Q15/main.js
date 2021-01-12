console.log("Problem Solving Q:15 ");

/*  jointCharacters*/

/*  
Write a function that accepts two strings , and returns only the characters that are joint on both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function jointCharacters(first_string, second_string) {
  let first_array = first_string.split("");
  let second_array = second_string.split("");
  let string = "";
  for (let i = 0; i < first_array.length; i++) {
    if (second_array.includes(first_string[i])) {
      string = string + first_array[i];
    }
  }
  return String.prototype.concat(...new Set(string.replace(/ /g, "")));
}

/* 
Examples:
jointCharacters('abc', 'abc') // => 'abc'
jointCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
jointCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/
