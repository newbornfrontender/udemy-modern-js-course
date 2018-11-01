const cartItems = 20 + 30 + 40 + 20;
const discount = (cartItems / 100) * 2;
const totalPay = cartItems - discount;

console.log(`Total: ${cartItems}`);
console.log(`Discount: ${discount}`);
console.log(`Pay: $${totalPay}`);
