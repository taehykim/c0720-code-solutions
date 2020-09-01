/* eslint-disable no-unused-vars */
function isAnagram(first, second) {
  const regex = /[^a-z]/gi;
  const firstLetters = first.replace(regex, '').split('');
  second = second.replace(regex, '');

  for (let i = 0; i < second.length; i++) {
    if (!firstLetters.includes(second[i])) return false;
    firstLetters.splice(firstLetters.indexOf(second[i]), 1);
  }
  return true;
}
