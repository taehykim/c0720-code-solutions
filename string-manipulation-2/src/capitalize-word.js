/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') return 'JavaScript';

  let capitalized = '';
  for (let i = 1; i < word.length; i++) {
    capitalized += word[i].toLowerCase();
  }
  return word[0].toUpperCase() + capitalized;
}
