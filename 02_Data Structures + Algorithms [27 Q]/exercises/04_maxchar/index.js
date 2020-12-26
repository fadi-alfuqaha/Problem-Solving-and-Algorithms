// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (char != " ") {
        if (chars[char] == null) {
          chars[char] = 1;
        } else {
          chars[char] += 1;
        }
      }
    });
  let highest_num = 0;
  for (const key in chars) {
    if (chars[key] > highest_num) {
      highest_num = chars[key];
    }
  }
  let res = "";
  for (let k in chars) {
    if (chars[k] === highest_num) {
      res += k;
    }
  }
  return res;
}

module.exports = maxChar;
