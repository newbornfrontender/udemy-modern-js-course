// const months = new Array('January', 'February', 'March', 'April', 'May', 'June');

// console.log(months.sort().reverse());

// const arr1 = ['1', '2', '3'];
// const arr2 = ['7', '8', '9'];

// console.log(arr1.concat(arr2));

const nums = [1, 82, 31, 47, 4, 40, 0, 16, 56, 77]

function sortLowerNums(num1, num2) {
  return num1 - num2;
};

function sortGreaterNums(num1, num2) {
  return num2 - num1;
};

console.log(nums.sort(sortLowerNums));
console.log(nums.sort(sortGreaterNums));
