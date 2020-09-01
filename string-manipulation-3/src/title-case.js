/* eslint-disable no-unused-vars */
function titleCase(title) {
  const minorWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to'
  ];
  const apiRegex = /api/gi;
  const jsRegex = /javascript/gi;
  const subTitleRegex = /[:]/;
  const words = title.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].match(apiRegex)) words[i] = words[i].replace(apiRegex, 'API');
    if (words[i].match(jsRegex)) { words[i] = words[i].replace(jsRegex, 'JavaScript'); }

    if (words[i].match(subTitleRegex)) {
      capitalizeSubTitle(i, words);
    }

    if (!minorWords.includes(words[i])) {
      if (words[i].includes('-')) {
        const letters = words[i].split('');
        const hyphenIndex = letters.indexOf('-');
        letters[0] = letters[0].toUpperCase();
        letters[hyphenIndex + 1] = letters[hyphenIndex + 1].toUpperCase();
        words[i] = letters.join('');
      } else {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
      }
    }
  }
  return words.join(' ');
}

function capitalizeSubTitle(index, words) {
  if (index + 1 < words.length) {
    words[index + 1] =
      words[index + 1][0].toUpperCase() + words[index + 1].substring(1);
  }
}
