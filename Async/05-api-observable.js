

// function timeout(delay, letter) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(letter);
//     }, delay);
//   });
// }

// timeout(1000, 'A')
//   .then((letter) => {
//     console.log(letter);
//     return timeout(1000, 'B');
//   })
//   .then((letter) => {
//     console.log(letter);
//   })


// const letters = ['A', 'B'];
// let i = 0;

// const interval = setInterval(() => {
//   console.log(letters[i++]);
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 2500);

// const { Observable } = require('rxjs');

// function interval(delay, letters) {
//   let i = 0;
//   return new Observable((observer) => {
//     const interval = setInterval(() => {
//       observer.next(letters[i++]);
//       if (i === letters.length) {
//         clearInterval(interval);
//         observer.complete();
//       }
//     }, delay);
//   });
// }

// interval(1000, ['A', 'B', 'C', 'D'])
//   .subscribe((letter) => {
//     console.log(letter);
//   })

const { interval } = require('rxjs');
const { take, map } = require('rxjs/operators');

const letters = ['A', 'B', 'C', 'D'];

interval(1000)
  .pipe(
    take(letters.length),
    map((i) => letters[i])
  )
  .subscribe({
    next: (val) => console.log(val),
    complete: () => console.log('FIN'),
  });

// Marble Graph (un tiret - === 250ms)
// interval(1000)
// ----0----1----2----3----4----5----6--...
// take(4)
// ----0----1----2----3|
// map((i) => letters[i])
// ----A----B----C----D|
