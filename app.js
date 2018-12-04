try {
  // something();
  getClients();
} catch (err) {
  console.log(err);
} finally {
  console.log('Execute always no matter what!');
}

function getClients() {
  console.log('Downloading...');

  setTimeout(() => console.log('Complete...'), 3000);
}

getClients();
