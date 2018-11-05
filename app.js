// const nums = [10, 20, 30, 40, 50];

// function print(arr, pos) {
//   return arr[pos];
// };

// console.log(print(nums, 3));

// ----------------------------------------

const months = new Array('January', 'February', 'March', 'April');

// console.log(months);
// console.log(months.length);
// console.log(Array.isArray(months));
// months[2] = 'December';
// console.log(months[2]);

// ----------------------------------------

months.push('July');

months.splice(2, null, 'new month');

console.log(months.indexOf('March'));
console.log(months);
