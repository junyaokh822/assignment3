const reverseString = require('./reverseString');

describe("reverseString(string) takes an input of string and reverses the order of it", () => {
    test("reverseString(hello) => olleh", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    test("reverseString(OpenAI) => IAnepO", () => {
        expect(reverseString("OpenAI")).toBe("IAnepO");
    });

    test("reverseString(racecar) => racecar", () => {
        expect(reverseString("racecar")).toBe("racecar");
    });
});
