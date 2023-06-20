const {reverseString, isPalindrome} = require('./stringFunctions');

describe("reverseString(string) takes an input of string and reverse the order of it", () => {
    test("reverseString(string)=> gnirts", () => {
    expect(reverseString("string")).toBe("gnirts");
})
});

describe("isPalindrome(string) takes an input and check whether it's a palindrome", () => {
    test("isPalindrome(string)=> false", () => {
    expect(isPalindrome("string")).toBe(false);
})
});