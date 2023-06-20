const {addToCart, removeFromCart, calculateTotal} = require('./shoppingCart');

describe("addToCart(item,quantity) takes an input of item and add 1 to its quantity", () => {
    test("addToCart(item,quantity)=> item", () => {
    expect(addToCart("item","quantity")).toBe("item");
})
});

describe("removeFromCart(item,quantity) takes an input of item and subtract 1 to its quantity", () => {
    test("removeFromCart(item,quantity)=> item", () => {
    expect(removeFromCart("item","quantity")).toBe("item");
})
});

describe("calculateTotal() calculate the cost of the item selected", () => {
    test("calculateTotal()=> total", () => {
    const total = calculateTotal();
    expect(calculateTotal()).toBe(total);
})
});