const { expect } = require('chai');
const weekday = require('./functions');

// sanity check
describe('Mocha sanity test', () => {
  it('should run our tests using npm', () => {
    expect(true).to.be.ok;
  });
});

// test suite covering function
describe('weekday()', () => {
  it('is a function', () => {
    expect(weekday).to.be.a('function');
  });
  // Req: test using expected/valid inputs for the weekday()
  context('returns expected output for valid inputs', () => {
    it('weekday(new Date(2017, 5, 19)) should equal Mon', () => {
      expect(weekday(new Date(2017, 5, 19))).to.equal('Mon');
    });
    it('weekday(new Date(2017, 6, 19)) should equal Wed', () => {
      expect(weekday(new Date(2017, 6, 19))).to.equal('Wed');
    });
  });
  // Req: test using unexpected/invalid inputs for the weekday()
  context('returns expected output for valid inputs', () => {
    it('weekday("blah") to throw a TypeError', () => {
      expect(() => { weekday('blah'); }).to.throw(TypeError);
    });
    it('weekday() to throw a TypeError', () => {
      expect(() => { weekday(); }).to.throw(TypeError);
    });
  });
});
