// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  const preTwo = parseInt(cardNumber.slice(0, 2));
  const preThree = parseInt(cardNumber.slice(0, 3));
  const preFour = parseInt(cardNumber.slice(0, 4));
  const length = cardNumber.length;

  const dinerClub = (preTwo === 38 || preTwo === 39) && length === 14;

  const amex = (preTwo === 34 || preTwo === 37) && length === 15;

  const visa = cardNumber.slice(0, 1) === '4' && (length === 13 || length === 16 || length === 19);

  const masterCard = (preTwo >= 51 && preTwo <= 55) && length === 16;

  const discover = (preFour === 6011 || preTwo === 65
                    || (preThree >= 644 && preThree <= 649))
                    && (length === 16 || length === 19);

  const maestro = (preFour === 5018 || preFour === 5020 || preFour === 5038 || preFour === 6304)
                  && (length >= 12 && length <= 19);

  let cardName;

  if (dinerClub) cardName = 'Diner\'s Club';
  if (amex) cardName = 'American Express';
  if (visa) cardName = 'Visa';
  if (masterCard) cardName = 'MasterCard';
  if (discover) cardName = 'Discover';
  if (maestro) cardName = 'Maestro';

  return cardName;
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

