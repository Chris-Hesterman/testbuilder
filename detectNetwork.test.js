/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
// var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  var should = chai.should();

  for (let prefix = 38; prefix <= 39; prefix++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 14`, function() {
        detectNetwork('38345678901234').should.equal('Diner\'s Club');
      });
    })(prefix)
  }
});

describe('American Express', function() {
  var should = chai.should();
  const prefixes = [34, 37];

  for (let i = 0; i < 2; i++) {
    const prefix = prefixes[i];

    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 15`, function() {
        detectNetwork(`${prefix}3648675286746`).should.equal('American Express');
      });
    })(prefix);
  }
});

describe('Visa', function() {
  var should = chai.should();

  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
  var should = chai.should();

  for (let prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        detectNetwork(`${prefix}26473829876453`).should.equal('MasterCard');
      })
    })(prefix);
  }
});

describe('Discover', function() {
  var should = chai.should();
  const prefixes = [6011, 65]

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011987465837564').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011867398106947124').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6547389452968646').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6547389452968646354').should.equal('Discover');
  });

  for (let prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        detectNetwork(`${prefix}4765389572876`).should.equal('Discover');
      });
      it(`has a prefix of ${prefix} and a length of 19`, function() {
        detectNetwork(`${prefix}2658652987009845`).should.equal('Discover');
      });
    })(prefix);
  }

});

describe('Maestro', function() {
  var should = chai.should();

  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501845639757').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018456397573').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50184563975734').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501845639757648').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018456397572439').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50184563975738563').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501845639757538675').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018456397574528765').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502045639757').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020456397573').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function() {
    detectNetwork('50204563975734').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() {
    detectNetwork('502045639757648').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020456397572439').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50204563975738563').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502045639757538675').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020456397574528765').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503845639757').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038456397573').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50384563975734').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503845639757648').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() {
    detectNetwork('5038456397572439').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50384563975738563').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503845639757538675').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038456397574528765').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630445639757').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function() {
    detectNetwork('6304456397573').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() {
    detectNetwork('63044563975734').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() {
    detectNetwork('630445639757648').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() {
    detectNetwork('6304456397572439').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() {
    detectNetwork('63044563975738563').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() {
    detectNetwork('630445639757538675').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304456397574528765').should.equal('Maestro');
  });

});


describe('China UnionPay', function() {
  var should = chai.should();

  for (let i = 0; i < 800; i++) {
    const prefSix = (622126 + i);

    (function(prefSix) {
      it(`has a prefix of ${prefSix} and a length of 16`, function() {
        detectNetwork(`${prefSix}1234567893`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefSix} and a length of 17`, function() {
        detectNetwork(`${prefSix}12345678936`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefSix} and a length of 18`, function() {
        detectNetwork(`${prefSix}123456789388`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefSix} and a length of 19`, function() {
        detectNetwork(`${prefSix}1234567893889`).should.equal('China UnionPay');
      });
    })(prefSix);
  }

  for (let j = 0; j < 3; j++) {
    const prefThree = (624 + j);

    (function(prefThree) {
      it(`has a prefix of ${prefThree} and a length of 16`, function() {
        detectNetwork(`${prefThree}3756492089563`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefThree} and a length of 17`, function() {
        detectNetwork(`${prefThree}37564920895636`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefThree} and a length of 18`, function() {
        detectNetwork(`${prefThree}375649208956388`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefThree} and a length of 19`, function() {
        detectNetwork(`${prefThree}3756492089563889`).should.equal('China UnionPay');
      });
    })(prefThree);
  }

  for (let k = 0; k < 7; k++) {
    const prefFour = (6282 + k);

    (function(prefFour) {
      it(`has a prefix of ${prefFour} and a length of 16`, function() {
        detectNetwork(`${prefFour}364819675364`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefFour} and a length of 17`, function() {
        detectNetwork(`${prefFour}3648196753646`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefFour} and a length of 18`, function() {
        detectNetwork(`${prefFour}36481967536488`).should.equal('China UnionPay');
      });
      it(`has a prefix of ${prefFour} and a length of 19`, function() {
        detectNetwork(`${prefFour}364819675364889`).should.equal('China UnionPay');
      });
    })(prefFour);
  }

});

describe('Switch', function() {
  var should = chai.should();
  const prefixesFour = [4903, 4905, 4911, 4936, 6333, 6759];
  const prefixesSix = [564182, 633110];

  for (let i = 0; i < prefixesFour.length; i++) {
    const prefix = prefixesFour[i];

    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        detectNetwork(`${prefix}768564736586`).should.equal('Switch');
      });
      it(`has a prefix of ${prefix} and a length of 18`, function() {
        detectNetwork(`${prefix}76856473658643`).should.equal('Switch');
      });
      it(`has a prefix of ${prefix} and a length of 19`, function() {
        detectNetwork(`${prefix}768564736586677`).should.equal('Switch');
      });
    })(prefix);
  }

  for (let j = 0; j < prefixesSix.length; j++) {
    const prefix = prefixesSix[j];

    (function(prefix) {
      it(`has a prefix of ${prefix} and a length of 16`, function() {
        detectNetwork(`${prefix}7685647365`).should.equal('Switch');
      });
      it(`has a prefix of ${prefix} and a length of 18`, function() {
        detectNetwork(`${prefix}768564736586`).should.equal('Switch');
      });
      it(`has a prefix of ${prefix} and a length of 19`, function() {
        detectNetwork(`${prefix}7685647365865`).should.equal('Switch');
      });
    })(prefix)
  }

});

