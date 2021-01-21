// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    let char = "";

    for (let k = 1; k <= n - i; k++) {
      char += " ";
    }

    for (let j = 0; j != 2 * i - 1; j++) {
      char += "#";
    }

    for (let k = i + 1; k <= n; k++) {
      char += " ";
    }
    console.log(char);
  }
}

module.exports = pyramid;
