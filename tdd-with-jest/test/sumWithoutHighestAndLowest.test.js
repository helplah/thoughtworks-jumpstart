const sumWithoutHighestAndLowest = require('../src/sumWithoutHighestAndLowest.js');

// write test cases to ensure sumWithoutHighestAndLowest() works as expected
describe('sumWithoutHighestAndLowest()', () => {
  test('[6, 2, 1, 8, 10] should return 16', () => {
    expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
  });
  
  test('[1, 1, 11, 2, 3] should return 5()', () => {
    expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
  });
});