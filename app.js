let email = 'email@email.com';

let check = email.indexOf('@');

if (check > 0) {
  console.log(`Valid email, output: ${check}`);
} else {
  console.log(`Invalid email, output: ${check}`);
};
