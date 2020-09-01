/* eslint-disable no-unused-vars */
function numVowels(str) {
  if (!str) return 0;
  const vowelRegex = /[aeiou]/gi;
  return str.match(vowelRegex).length;
}
