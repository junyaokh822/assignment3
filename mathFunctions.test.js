const {add, subtract, multiply, divide} = require('./mathFunctions');
describe("add(1, 2) takes in two inputs and perform add", () => {
    test("add(1,2)=> 3", () => {
    expect(add(1, 2)).toBe(3);
})
});

describe("subtract(1, 2) takes in two inputs and perform subtract", () => {
    test("subtract(1,2)=> -1", () => {
    expect(subtract(1, 2)).toEqual(-1);
})
});

describe("multiply(1, 2) takes in two inputs and perform multiply", () => {
    test("multiply(1,2)=> 2", () => {
    expect(multiply(1, 2)).toEqual(2);
})
});

describe("divide(1, 2) takes in two inputs and perform divide", () => {
    test("divide(1,2)=> 0.5", () => {
    expect(divide(1, 2)).toEqual(0.5);
})
});
  
