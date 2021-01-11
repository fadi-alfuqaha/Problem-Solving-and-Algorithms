console.log("Problem Solving Q: 3 ");

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

function firstReverse(str) {
  let newstr = str.split("");
  let newString = "";
  for (let j = str.length - 1; j >= 0; j--) {
    newString = newString + str[j];
  }
  return newString;
}

/* 
Examples:
firstReverse('I Love Code'); // => 'edoC evoL I'
firstReverse('Hello World'); // => 'dlroW olleH'
firstReverse('How are you?'); // => '?uoy era woH'
*/
