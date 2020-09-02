/* global _ */
/* eslint-disable no-console */
console.log('Lodash is loaded:', typeof _ !== 'undefined');

const players = getPlayers();
start(players);

function getPlayers() {
  const player1 = { name: 'Acai', hand: [] };
  const player2 = { name: 'Berry', hand: [] };
  const player3 = { name: 'Cherry', hand: [] };
  const player4 = { name: 'Date', hand: [] };
  const players = [player1, player2, player3, player4];
  return players;
}

function createCards() {
  const ranks = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K'
  ];
  const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  const cards = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = { suit: suits[i], rank: ranks[j] };
      cards.push(card);
    }
  }
  return cards;
}

function shuffleCards(cards) {
  for (let i = 0; i < cards.length; i++) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const temp = cards[i];
    cards[i] = cards[randomIndex];
    cards[randomIndex] = temp;
  }
}

function distributeCards(players, cards, numOfCards) {
  const takenIndexes = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < numOfCards; j++) {
      let randomIndex = Math.floor(Math.random() * cards.length);

      while (takenIndexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * cards.length);
      }

      takenIndexes.push(randomIndex);
      players[i].hand.push(cards[randomIndex]);
    }
  }
}

function getWinner(players) {
  const scoreBoard = { A: 11, J: 10, Q: 10, K: 10 };
  let currWinnerScore = 0;
  let currWinner = null;
  let tie = [];
  for (let i = 0; i < players.length; i++) {
    let score = 0;
    for (let j = 0; j < players[i].hand.length; j++) {
      if (Object.keys(scoreBoard).includes(players[i].hand[j].rank)) {
        score += Number(scoreBoard[players[i].hand[j].rank]);
      } else score += Number(players[i].hand[j].rank);
    }

    if (score >= currWinnerScore) {
      if (score === currWinnerScore) tie.push(currWinner, players[i]);
      currWinnerScore = score;
      currWinner = players[i];
    } else {
      tie = [];
    }
  }

  if (tie.length !== 0) {
    for (let i = 0; i < tie.length; i++) {
      tie[i].hand = [];
    }
    start(tie);
  } else {
    return currWinner;
  }
}

function start(players) {
  const cards = createCards();
  shuffleCards(cards);
  distributeCards(players, cards, 2);
  console.log(getWinner(players));
}
