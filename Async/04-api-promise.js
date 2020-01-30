function timeout(delay, letter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(letter);
    }, delay);
  });
}

// timeout(500).then(() => console.log('A'));
// timeout(0).then(() => console.log('B'));
// timeout(1000).then(() => console.log('C'));
// timeout(500).then(() => console.log('D'));
// timeout(Math.random() * 1000).then(() => console.log('F'));

// console.log('E');

// (async () => {
//   await timeout(500);
//   console.log('A');
//   await timeout(0);
//   console.log('B');
//   await timeout(1000);
//   console.log('C');
//   await timeout(500);
//   console.log('D');
//   await timeout(Math.random() * 1000);
//   console.log('F');
// })();

// console.log('E');

(async () => {
  const values = await Promise.all([
    timeout(500, 'A'),
    timeout(0, 'B'),
    timeout(1000, 'C'),
    timeout(500, 'D'),
    timeout(Math.random() * 1000, 'E'),
  ]);
  console.log(values);
})();


function findArray(tab, cb) {
  const elt = tab.find(cb);
  // return new Promise((resolve) => {
  //   resolve(elt);
  // });
  return Promise.resolve(elt);
}

// Promise.race(
//   axios.get(),
//   timeout(2000),
// );
