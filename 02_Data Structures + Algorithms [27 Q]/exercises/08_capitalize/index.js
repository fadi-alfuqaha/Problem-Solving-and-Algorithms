// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  var arrayString = str.toLowerCase().split(" ");
  for (var i = 0; i < arrayString.length; i++) {
    arrayString[i] =
      arrayString[i].charAt(0).toUpperCase() + arrayString[i].substring(1);
  }
  return arrayString.join(" ");
}

module.exports = capitalize;
