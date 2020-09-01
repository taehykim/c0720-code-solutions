/* eslint-disable no-unused-vars */
function union(first, second) {
  const unionArr = [...first];
  let found = 0;
  for (let i = 0; i < second.length; i++) {
    for (let j = 0; j < first.length; j++) {
      if (second[i] === first[j]) found = 1;
    }
    if (!found) unionArr.push(second[i]);
    found = 0;
  }
  return unionArr;
}
