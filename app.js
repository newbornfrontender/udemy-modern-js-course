// const person = {
//   firstName: 'Bob',
//   lastName: 'Ross',
//   job: 'Twitch Painter',
//   age: 52,
//   bornYear: function() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// console.log(person.bornYear());

let cars = [{
  model: 'Mustang',
  engine: 6.0,
}, {
  model: 'Camarro',
  engine: 6.1,
}];

cars.map(({ model, engine }) => {
  console.log(`${model}: ${engine}`);
});

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  console.log(`${car.model}: ${car.engine}`);
};
