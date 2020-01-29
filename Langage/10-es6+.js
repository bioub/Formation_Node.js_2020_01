// REST Params (ES6)
// function sum(a, b) {
//   let result = a + b;

//   for (let i = 2; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

function sum(a, b, ...nbs) {
  let result = a + b;

  nbs.forEach((nb) => result += nb);

  return result;
}

console.log(sum(1, 2, 3, 4)); // 10

// REST Params, conversion une liste de valeurs -> tableau

// SPREAD operator (ES6)
const nbs = [1, 2, 3, 4];

function multiply(a, b, c, d) {
  return a * b * c * d;
}

console.log(multiply(nbs[0], nbs[1], nbs[2], nbs[3]));
console.log(multiply(...nbs));

// Cloner
const others = [0, ...nbs, 5];
const clone = [...nbs]; // nbs.slice() en ES5

// Cloner un objet en ES6
const coords = {x: 1, y: 2};
const cloneObj = Object.assign({}, coords);

// Cloner un objet en ES9/ES2018
const cloneObjES9 = {...coords}; // SPREAD Object

// Destructurer
//    [1  , 2  , 3, 4    ]
const [one, two, ...numbers] = [1, 2, 3, 4];

//    {x: 1      , y: 2      }
const {x: valeurX, y: valeurY} = coords;

const {x, y = 3, ...othersKeys} = coords;


function *generateNumber() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generateNumber();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3

for (const nb of generateNumber()) {
  console.log(nb); // 1 2 3
}
