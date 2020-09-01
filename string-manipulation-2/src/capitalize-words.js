/* eslint-disable no-unused-vars */
function capitalizeWords(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
  }
  return words.join(' ');
}
