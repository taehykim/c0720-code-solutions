/* eslint-disable no-unused-vars */
function ransomCase(str) {
  let ransom = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) ransom += str[i].toLowerCase();
    else ransom += str[i].toUpperCase();
  }
  return ransom;
}
