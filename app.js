const months = new Array('January', 'February', 'March', 'April', 'May', 'June');

months.pop();
months.shift();
months.splice(2, 1);

console.log(months);
