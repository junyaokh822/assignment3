const twoSum = require('./twoSum');

describe("twoSum(nums,target) return indices of the two numbers such that they add up to target ", () => {
    test("twoSum(nums,target)=> [i, j]", () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const expected = [0,1];
    expect(twoSum(nums,target)).toEqual(expected);
})
});

describe("twoSum(nums,target) return indices of the two numbers such that they add up to target ", () => {
    test("twoSum(nums,target)=> [i, j]", () => {
        const nums = [3,2,4];
        const target = 6;
        const expected = [1,2];
    expect(twoSum(nums,target)).toEqual(expected);
})
});

describe("twoSum(nums,target) return indices of the two numbers such that they add up to target ", () => {
    test("twoSum(nums,target)=> [i, j]", () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const expected = [2,4];
    expect(twoSum(nums,target)).toEqual(expected);
})
});