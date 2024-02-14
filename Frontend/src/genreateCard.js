const makeCard = () => {
  const cardObject = { 1: '😼 Meowww', 2: '⛑️ I am your Saviour', 3: '🔀 Let\'s do it again!', 4: '💣 Boooommm' };
  let cardArray = [];
  const numberOfCard = 5;
  const getRandomNumber = () => Math.floor(Math.random() * (5 - 1) + 1);
  for (let index = 0; index < numberOfCard; index++) cardArray.push(cardObject[getRandomNumber()]);
  return cardArray;
};
export default makeCard;
