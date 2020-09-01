/* eslint-disable no-unused-vars */
function swapChars(first, second, str) {
  let swapped = '';
  const firstOrig = str[first];
  const secondOrig = str[second];
  for (let i = 0; i < str.length; i++) {
    if (i === first) swapped += secondOrig;
    else if (i === second) swapped += firstOrig;
    else swapped += str[i];
  }
  return swapped;
}
