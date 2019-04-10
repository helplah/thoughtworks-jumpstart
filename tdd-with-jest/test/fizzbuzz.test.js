const fizzbuzz = require("../src/fizzbuzz");

// refactor function to es6 arrow
describe('fizzbuzz()', () => {
  test("1 should return number 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  
  test("3 should return fizz", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
  });
  
  test("5 should return buzz", () => {
    expect(fizzbuzz(5)).toEqual("buzz");
  });
  
  test("15 should return fizzbuzz", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
});