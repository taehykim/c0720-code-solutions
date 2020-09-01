/* eslint-disable no-unused-vars */
function reverseWords(str) {
  let reversed = '';
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    for (let j = words[i].length - 1; j >= 0; j--) {
      reversed += words[i][j];
    }
    if (i !== words.length - 1) reversed += ' ';
  }
  return reversed;
}
