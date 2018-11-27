const cars = ['Camaro', 'Mustang', 'Challenger'];

const selected = 1;
let car;

switch (selected) {
  case 1:
    car = cars[0];
    break;
  case 2:
    car = cars[1];
    break;
  case 3:
    car = cars[2];
    break;
}

console.log(`Your selected car is: ${car}`);
