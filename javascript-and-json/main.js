/* eslint-disable no-console */
const books = [
  { ibsn: '9780735211292', title: 'Atomic Habits', author: 'James Clear' },
  {
    isbn: '9781118008188',
    title: 'HTML and CSS: Design and Build Websites',
    author: 'Jon Duckett'
  },
  {
    isbn: '9780804137386',
    title: 'Essentialism: The Disciplined Pursuit of Less',
    author: 'Greg McKeown'
  }
];

console.log(JSON.stringify(books));
console.log('type of JSON.stringify(books):', typeof JSON.stringify(books));

console.log(JSON.parse(JSON.stringify(books)));
console.log('type of JSON.parse():', typeof JSON.parse(JSON.stringify(books)));
