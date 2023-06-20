const maxArea = require('./containMostWater');

describe("maxArea(height) find two lines that together with the x-axis forms a container that holds the most water.", () => {
    test("maxArea(height) => expected", () => {
        const height=[1, 8, 6, 2, 5, 4, 8, 3, 7];
        const expected = 49;
        expect(maxArea(height)).toEqual(expected);
    });

    test("maxArea(height) => expected", () => {
        const height=[4, 3, 2, 1, 4];
        const expected = 16;
        expect(maxArea(height)).toEqual(expected);
    });

    test("maxArea(height) => expected", () => {
        const height=[1, 2, 1];
        const expected = 2;
        expect(maxArea(height)).toEqual(expected);
    });
});