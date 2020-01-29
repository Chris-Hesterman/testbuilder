// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  const preOne = parseInt(cardNumber.slice(0, 1));
  const preTwo = parseInt(cardNumber.slice(0, 2));
  const preThree = parseInt(cardNumber.slice(0, 3));
  const preFour = parseInt(cardNumber.slice(0, 4));
  const preSix = parseInt(cardNumber.slice(0, 6));
  const length = cardNumber.length;

  const dinerClub = (preTwo === 38 || preTwo === 39) && length === 14;

  const amex = (preTwo === 34 || preTwo === 37) && length === 15;

  const visa =
    preOne === 4 && (length === 13 || length === 16 || length === 19);

  const masterCard = preTwo >= 51 && preTwo <= 55 && length === 16;

  const discover =
    (preFour === 6011 ||
      preTwo === 65 ||
      (preThree >= 644 && preThree <= 649)) &&
    (length === 16 || length === 19);

  const maestro =
    (preFour === 5018 ||
      preFour === 5020 ||
      preFour === 5038 ||
      preFour === 6304) &&
    length >= 12 &&
    length <= 19;

  const chinaUnion =
    length >= 16 &&
    length <= 19 &&
    ((preSix >= 622126 && preSix <= 622925) ||
      (preThree >= 624 && preThree <= 626) ||
      (preFour >= 6282 && preFour <= 6288));

  const switchCard =
    (preFour === 4903 ||
      preFour === 4905 ||
      preFour === 4911 ||
      preFour === 4936 ||
      preFour === 6333 ||
      preFour === 6759 ||
      preSix === 564182 ||
      preSix === 633110) &&
    (length === 16 || length === 18 || length === 19);

  let cardName;

  if (dinerClub) {
    cardName = "Diner's Club";
  }
  if (amex) {
    cardName = 'American Express';
  }
  if (visa === true && switchCard !== true) {
    cardName = 'Visa';
  }
  if (masterCard) {
    cardName = 'MasterCard';
  }
  if (discover) {
    cardName = 'Discover';
  }
  if (maestro) {
    cardName = 'Maestro';
  }
  if (chinaUnion) {
    cardName = 'China UnionPay';
  }
  if (switchCard) {
    cardName = 'Switch';
  }

  return cardName;
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
};
