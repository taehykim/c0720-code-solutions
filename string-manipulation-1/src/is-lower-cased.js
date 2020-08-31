/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i] && word[i].match(/[a-z]/i)) return false;
  }
  return true;
}
