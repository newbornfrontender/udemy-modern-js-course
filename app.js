// const todo = ['Homework', 'Food', 'Project'];

// for (let i = 0; i < todo.length; i++) {
//   console.log(todo[i]);
// }

// todo.forEach((assigment, index) => console.log(`${index + 1}: ${assigment}`))

const shoppingCart = [
  {
    id: 1,
    product: 'Book',
  },
  {
    id: 2,
    product: 'Shirt',
  },
  {
    id: 3,
    product: 'Album',
  },
];

// const productName = (cart) =>
//   shoppingCart.map(({ id, product }) => console.log(`${id}: ${product}`));

// productName(shoppingCart);

const productName = shoppingCart.map(({ product }) => {
  return product;
});

console.log(productName);
