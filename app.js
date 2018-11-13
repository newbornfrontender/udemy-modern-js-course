'use strict';

const today = new Date();
// const birthday = new Date('March 26 1997');
// const birthday = new Date('03-26-1997');

let output;

output = today.getMonth() + 1;
output = today.getDate();
output = today.getDay();
output = today.getFullYear();
output = today.getMinutes();
output = today.getSeconds();
today.setFullYear(2007);
output = today.getFullYear();

console.log(output);
