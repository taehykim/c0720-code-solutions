/* eslint-disable no-unused-vars */
function isUpperCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === word[i]) return false;
  }
  return true;
}
