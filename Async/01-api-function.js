// 'use strict';
globalThis.name = 'Jean';

function hello(p1, p2) {
  console.log(`Hello ${p1}, ${p2}, i'm ${this.name}`);
}

const contact = { name: 'Romain' };

hello('Toto', 'Titi'); // Hello Jean
hello.call(contact, 'Toto', 'Titi');
hello.apply(contact, ['Toto', 'Titi']);
hello.call(contact, ...['Toto', 'Titi']);

// function bind(that) {
//   const fct = this
//   return function() {
//     fct.call(that);
//   }
// }

const contactHello = hello.bind(contact);
contactHello('Toto', 'Titi');
