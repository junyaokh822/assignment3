const lengthOfLongestSubstring = require('./longestSubstring');

describe("lengthOfLongestSubstring(string) find the length of the longest substring without repeating characters", () => {
    test("lengthOfLongestSubstring(abcabcbb) => 3", () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
    });

    test("lengthOfLongestSubstring(bbbbb) => 1", () => {
        expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
    });

    test("lengthOfLongestSubstring(pwwkew) => 3", () => {
        expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
    });
});