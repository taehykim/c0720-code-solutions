/* eslint-disable no-unused-vars */
function getWords(str) {
  if (!str) return [];

  const words = str.split(' ');
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    arr.push(words[i]);
  }
  return arr;
}
