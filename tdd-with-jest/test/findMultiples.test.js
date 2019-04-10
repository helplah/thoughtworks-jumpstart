const findMultiples = require("../src/findMultiples");

// write test cases to ensure findMultiples() works as expected
describe('findMultiples()', () => {
  test('(2, 6) should return [2, 4, 6]', () => {
    expect(findMultiples(2, 6)).toEqual([2, 4, 6]);
  });
  
  test('(3, 9) should return [3, 6, 9]', () => {
    expect(findMultiples(3, 9)).toEqual([3, 6, 9]);
  });
});