var monsterLevel = 3;
if (monsterLevel >= 8)  {
  console.log('You\'ve been attacked! Lose one heart.');
} else {
  console.log('Yikes that was close! Now attack that monster!');
}



var moonPhase = 'full';
if (moonPhase === 'full') {
  console.log('Howwwwlll!!');
} else {
  console.log('I swear I am not a werewolf...');
}



/////////////////

var cardType = 'hearts';

switch (cardType) {
  case 'hearts':
    console.log('Health card!');
    break;
  case 'diamonds':
    console.log('Food Supply Card!');
    break;
  case 'clubs':
    console.log('Zoiks! It\'s a monster!!');
    break;
  case 'spades':
    console.log('Weapon Card');
    break;
  case 'joker':
    console.log('Oh yeah! A Flare gun baby!');
    break;
  default:
    console.log('Invalid item');
    break;
}