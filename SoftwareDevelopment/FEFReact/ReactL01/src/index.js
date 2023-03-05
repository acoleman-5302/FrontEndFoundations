// alert("it's alive");

import React from 'react';
import ReactDOM from 'react-dom';

// React.createElement('h1', {}, 'Hello World!');


// ReactDOM.render(
//   React.createElement('div', {}, React.createElement('h1', {}, 'Hello World!')),
//   document.getElementById('root')
// );


// ReactDOM.render(
//   React.createElement(
//     'ul',
//     {},
//     React.createElement('li', {}, 'Apples'),
//     React.createElement('li', {}, 'Oranges'),
//     React.createElement('li', {}, 'Mangos')
//   ),
//   document.getElementById('root')
// );

// const apples = React.createElement(
//   'ul',
//   {},
//   React.createElement('li', {}, '$1.00 per lb')
// );
// const oranges = React.createElement(
//   'ul',
//   {},
//   React.createElement('li', {}, '$.70 per lb')
// );
// const mangos = React.createElement(
//   'ul',
//   {},
//   React.createElement('li', {}, '$2.00 per lb')
// );

// ReactDOM.render(
//   React.createElement(
//     'ul',
//     {},
//     React.createElement('li', {}, 'Apples', apples),
//     React.createElement('li', {}, 'Oranges', oranges),
//     React.createElement('li', {}, 'Mangos', mangos)
//   ),
//   document.getElementById('root')
// );


const applesPrice = React.createElement('li', {}, '$1.00 per lb');
const apples = React.createElement('ul', {}, applesPrice);

const orangesPrice = React.createElement('li', {}, '$.70 per lb');
const oranges = React.createElement('ul', {}, orangesPrice);

const mangosPrice = React.createElement('li', {}, '$2.00 per lb');
const mangos = React.createElement('ul', {}, mangosPrice);

ReactDOM.render(
  React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'Apples', apples),
    React.createElement('li', {}, 'Oranges', oranges),
    React.createElement('li', {}, 'Mangos', mangos)
  ),
  document.getElementById('root')
);


