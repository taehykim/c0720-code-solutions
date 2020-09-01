/* eslint-disable no-unused-vars */
function intersection(first, second) {
  const intersectionArr = [];
  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        intersectionArr.push(first[i]);
      }
    }
  }
  return intersectionArr;
}
