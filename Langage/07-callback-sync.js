const names = ['Jean', 'Eric', 'Pierre'];

// paradigme impératif
for (let i = 0; i < names.length; i++) {
  const n = names[i];
  if (n.length === 4) {
    const nUpper = n.toUpperCase();
    console.log(nUpper);
  }
}

// paradigme functionnel
names
  .filter((n) => n.length === 4)
  .map((n) => n.toUpperCase())
  .forEach((n) => console.log(`Hello ${n}`));

console.log('FIN');

// en interne forEach ressemble à :
// for (let i = 0; i < names.length; i++) {
//   const element = names[i];
//   callbackFn(element);
// }

// ^
// |               up   up   lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +---------------------------------------->
// console:                  JEAN ERIC FIN
