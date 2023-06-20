function addToCart(item, quantity){
    item.quantity += quantity;
    return item;
}

function removeFromCart(item, quantity){
    if(item.quantity ===0){
        return;
    }
    if(item .quantity !=0){
    item.quantity -= quantity;
}
    return item;
}

function calculateTotal(){
    let total = 0;
    let item = { price: 0, quantity: 0 };
    while(item.quantity > 0 && item){
        total += item.price * item.quantity;
    }
    return total;
}

module.exports = {
    addToCart,
    removeFromCart,
    calculateTotal
};