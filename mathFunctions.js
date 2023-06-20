const mathFunctions = require('./mathFunctions');
 
test('mathFunctions(1, 2) takes in two inputs and perform add, subtract, multiply, and divide', () => {
  expect(sum(1, 2)).toBe(3);
  expect(subtract(1, 2)).toBe(-1);
  expect(multiply(1, 2)).toBe(2);
  expect(divide(1, 2)).toBe(0.5);
});