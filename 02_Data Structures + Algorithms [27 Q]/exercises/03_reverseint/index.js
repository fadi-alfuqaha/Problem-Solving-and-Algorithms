// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = "" + Math.abs(n);
  const reversedString = str.split("").reverse().join("");
  const num = +reversedString;
  return (n < 0 ? -1 : 1) * num;
}

module.exports = reverseInt;
