const product1 = 'Pizza';
const product2 = 'Hamburger';

const price1 = 30;
const price2 = 40;

// Old method

let html;

html =
  '<ul>' +
    '<li> Item: ' + product1 + '</li>' +
    '<li> Price: ' + price1 + '</li>' +
    '<li> Item: ' + product2 + '</li>' +
    '<li> Price: ' + price2 + '</li>' +
    '<li> Total: ' + ( price1 + price2 ) + '</li>' +
  '<ul>';

let app = document.querySelector('#app');

app.innerHTML = html;
