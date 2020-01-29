// Math
console.log(typeof Math); // object
console.log(typeof String); // function

// Extensibilité
console.log(Math.sum); // undefined

// ajouter
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// modifier
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// supprimer
delete Math.sum;
console.log(Math.sum); // undefined

// 2 opérateurs
// .
console.log(Math.PI);

// [] (plus dynamique)
console['log'](Math['PI']);

// Pour créer des objets 2 syntaxes

// object literal
const coords = {
  x: 1,
  y: 2, // virgule finale (ES5+)
};

coords.z = 3;

for (const key in coords) {
  if (coords.hasOwnProperty(key)) {
    const value = coords[key];
    console.log(key, value);
  }
}

// -> à utiliser
// quand cette forme n'est utilisé qu'une fois
// ou si plusieurs fois, très simple à créer MAIS sans méthodes

// MAUVAISE PRATIQUE (2 fonctions hello)
const contact1 = {
  name: 'Romain',
  hello() {
    return `My name is ${this.name}`;
  },
};

const contact2 = {
  name: 'Jean',
  hello() {
    return `My name is ${this.name}`;
  },
};

// une fonction est un objet
// on compare les références
console.log(contact1.hello === contact2.hello); // false



// constructor function
// function Contact(name) {
//   this.name = name;
// }

// Contact.prototype.hello = function() {
//   return `My name is ${this.name}`;
// };

class Contact {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return `My name is ${this.name}`;
  }
}

const romain = new Contact('Romain');
console.log(romain.hello());
const jean = new Contact('Jean');
console.log(jean.hello());

console.log(romain.name !== undefined); // true
console.log(romain.hello !== undefined); // true
console.log(romain.hasOwnProperty('name')); // true
console.log(romain.hasOwnProperty('hello')); // false

console.log(typeof romain); // object
console.log(typeof Contact); // function
console.log(romain.hello === jean.hello); // true
