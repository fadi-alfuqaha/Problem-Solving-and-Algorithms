console.log("Problem Solving Q: 4 ");

/* Username Validation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function usernameValidation(str) {
  let strArray = str.split("");
  lenghtOfStr = str.lenght;
  let letterNumber = /^[0-9a-zA-Z_]+$/;
  if (lenghtOfStr < 4 || lenghtOfStr > 25) {
    console.log(1);
    return false;
  }
  if (!/[a-zA-Z]/.test(strArray[0])) {
    console.log(2);
    return false;
  }

  if (!str.match(letterNumber)) {
    console.log(3);
    return false;
  }
  if (strArray[lenghtOfStr - 1] == "_") {
    console.log(4);
    return false;
  }

  return true;
}

/* 
Examples:
usernameValidation('aa_'); // => false
usernameValidation('u__hello_world123'); // => true

*/
