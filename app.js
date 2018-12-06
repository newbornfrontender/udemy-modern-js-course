var a = 'a';
let b = 'b';
const c = 'c';

function funcScope() {
  var a = 'A';
  let b = 'B';
  const c = 'C';

  console.log(`FUNC SCOPE: ${a}, ${b}, ${c}`);
}

funcScope();

if (true) {
  var a = 'AA';
  let b = 'BB';
  const c = 'CC';

  console.log(`BLOCK SCOPE: ${a}, ${b}, ${c}`);
}

for (var a = 0; a < 3; a += 1) {
  console.log(a);
}

console.log(`GLOBAL: ${a}, ${b}, ${c}`);
