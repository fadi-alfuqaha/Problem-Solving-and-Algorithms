// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (stringA.length !== stringB.length) {
    return false;
  }

  let lowerStringOne = stringA.toLowerCase();
  var lowerStringTwo = stringB.toLowerCase();

  if (lowerStringOne === lowerStringTwo) {
    return false;
  }

  var firstString = lowerStringOne.split("").sort().join("");
  var secondString = lowerStringTwo.split("").sort().join("");

  return firstString === secondString;
}

module.exports = anagrams;
