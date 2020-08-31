/* eslint-disable no-unused-vars */
function isVowel(char) {
  const vowels = /[aeiou]/i;
  if (char.match(vowels)) return true;
  return false;
}
