const { expect } = require('chai');
const {
  weekday, snippet, numProps, filterBetween,
} = require('./functions');

// sanity check
describe('Mocha sanity test', () => {
  it('should run our tests using npm', () => {
    expect(true).to.be.ok;
  });
});

/** *************************
  Tests for weekday(date)
************************** */
describe('weekday(date)', () => {
  it('is a function', () => {
    expect(weekday).to.be.a('function');
  });
  context('returns expected output for valid inputs', () => {
    it('weekday(new Date(2017, 5, 19)) should equal Mon', () => {
      expect(weekday(new Date(2017, 5, 19))).to.equal('Mon');
    });
    it('weekday(new Date(2017, 6, 19)) should equal Wed', () => {
      expect(weekday(new Date(2017, 6, 19))).to.equal('Wed');
    });
  });
  context('returns errors for invalid inputs', () => {
    it('weekday("blah") to throw a TypeError', () => {
      expect(() => { weekday('blah'); }).to.throw(TypeError);
    });
    it('weekday() to throw a TypeError', () => {
      expect(() => { weekday(); }).to.throw(TypeError);
    });
  });
});

/** ************************************
  Tests for snippet(string, maxlength)
************************************* */
describe('snippet(string, maxlength)', () => {
  it('is a function', () => {
    expect(snippet).to.be.a('function');
  });
  context('returns expected output for valid inputs', () => {
    it('snippet("For the following exercises,", 10) should return "For the fo…"', () => {
      expect(snippet('For the following exercises,', 10)).to.equal('For the fo…');
    });
    it('snippet("Hello, world!", 20) to equal "Hello, world!"', () => {
      expect(snippet('Hello, world!', 20)).to.equal('Hello, world!');
    });
  });
  context('returns errors for invalid inputs', () => {
    it('snippet(blah, 10) should return a ReferenceError', () => {
      expect(() => { snippet(blah, 10); }).to.throw(ReferenceError);
    });
    it('snippet(10, 10) should return "First argument must be a string"', () => {
      expect(snippet(10, 10)).to.equal('First argument must be a string');
    });
    it('snippet(10, "blah") should return "Second argument must be a number"', () => {
      expect(snippet('hi', 'blah')).to.equal('Second argument must be a number');
    });
  });
});

/** *************************
  Tests for numProps(obj)
************************** */
const friend = {
  name: 'Dominique',
  age: 30,
  phone: '555-555-5555',
};

describe('numProps(obj)', () => {
  it('is a function', () => {
    expect(numProps).to.be.a('function');
  });
  context('returns expected output for valid inputs', () => {
    it('numProps({name: "joe", age: 30}) should return 2', () => {
      expect(numProps({ name: 'joe', age: 30 })).to.equal(2);
    });
    it('numProps({}) should return 0', () => {
      expect(numProps({})).to.equal(0);
    });
  });
  context('returns errors for invalid inputs', () => {
    it('numProps(["joe", 30]) should return a usage error', () => {
      expect(numProps(['joe', 30])).to.equal('Argument must be an object, not null, and not and array');
    });
    it('numProps(0) should return a usage error', () => {
      expect(numProps(0)).to.equal('Argument must be an object, not null, and not and array');
    });
    it('numProps(true) should return a usage error', () => {
      expect(numProps(true)).to.equal('Argument must be an object, not null, and not and array');
    });
    it('numProps("Joe") should return a usage error', () => {
      expect(numProps('joe')).to.equal('Argument must be an object, not null, and not and array');
    });
    it('numProps(undefined) should return a usage error', () => {
      expect(numProps(undefined)).to.equal('Argument must be an object, not null, and not and array');
    });
  });
});

/** ***************************************
  Tests for filterBetween(array, min, max)
**************************************** */

describe('filterBetween(array, min, max)', () => {
  it('is a function', () => {
    expect(filterBetween).to.be.a('function');
  });
  context('returns expected output for valid inputs', () => {
    it('filterBetween([5, 15, 25, 30, 35], 15, 34) should return an array', () => {
      expect(filterBetween([5, 15, 25, 30, 35], 15, 34)).to.be.an.instanceof(Array);
    });
    it('filterBetween([5, 15, 25, 30, 35], 15, 34) should not include 5, 35', () => {
      expect(filterBetween([5, 15, 25, 30, 35], 15, 34)).to.not.include(5, 35);
    });
    it('filterBetween([ 15, 25, 30 ], 0, 0) should return []', () => {
      expect(filterBetween([15, 25, 30], 50, 0)).to.be.empty;
    });
  });
  context('returns errors for invalid inputs', () => {
    it('filterBetween("array", "min", "max") should return a usage error', () => {
      expect(filterBetween('array', 'min', 'max')).to.equal('First argument is required and must be an array.');
    });
    it('filterBetween([], "min", "max") should return a usage error', () => {
      expect(filterBetween([], 'min', 'max')).to.equal('Second and third argument are required and must be a number.');
    });
    it('filterBetween([], 10, "max") should return a usage error', () => {
      expect(filterBetween([], 10, 'max')).to.equal('Second and third argument are required and must be a number.');
    });
    it('filterBetween([], "min", 10) should return a usage error', () => {
      expect(filterBetween([], 'min', 10)).to.equal('Second and third argument are required and must be a number.');
    });
  });
});
