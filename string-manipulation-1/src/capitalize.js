/* eslint-disable no-unused-vars */
function capitalize(word) {
  let cap = '';
  for (let i = 1; i < word.length; i++) {
    cap += word[i].toLowerCase();
  }
  return word[0].toUpperCase() + cap;
}
