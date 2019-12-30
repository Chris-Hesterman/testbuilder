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

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');

    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  });

  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901237').should.equal('Diner\'s Club');

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
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
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var should = chai.should();

  it('has a prefix of 51 and a length of 16', function() {
    (detectNetwork('5112345678901234')).should.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    (detectNetwork('5212345678901234')).should.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    (detectNetwork('5312345678901234')).should.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var should = chai.should();

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });

});

describe('Discover', function() {
  var should = chai.should();
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
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

  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6447389452968646').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6457389452968646').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6467389452968646').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6477389452968646').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6487389452968646').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6497389452968646').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6447389452968646473').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6457389452968646428').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6467389452968646385').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6477389452968437646').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6487389452968636546').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 119', function() {
    detectNetwork('6497389452968646254').should.equal('Discover');
  });

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

  for (let i = 0; i < 799; i++) {
    const prefSix = 622126 + i;

    it(`has a prefix of ${prefSix} and a length of 16`, function() {
      detectNetwork(`${prefSix}3726485746`).should.equal('China UnionPay')
    });
  }

  for (let j = 0; j < 3; j++) {
    const prefThree = 624 + i;

    it(`has a prefix of ${prefThree} and a length of 16`, function() {
      detectNetwork(`${prefThree}3648196753648`).should.equal('China UnionPay');
    });
  }

  for (let k = 0; k < 6; k++) {
    const prefFour = 6282 + i;

    it(`has a prefix of ${prefFour} and a length of 16`, function() {
      detectNetwork(`${prefFour}364819675364`).should.equal('China UnionPay');
    });
  }

});

