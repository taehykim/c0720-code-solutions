/* eslint-disable no-unused-vars */
function difference(first, second) {
  const diff = [];
  let found = 0;
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) found = 1;
    }
    if (!found) diff.push(first[i]);
    found = 0;
  }

  for (let k = 0; k < second.length; k++) {
    for (let m = 0; m < first.length; m++) {
      if (second[k] === first[m]) found = 1;
    }
    if (!found) diff.push(second[k]);
    found = 0;
  }
  return diff;
}
