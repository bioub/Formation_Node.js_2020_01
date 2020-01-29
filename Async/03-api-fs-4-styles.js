const fs = require('fs');
const path = require('path');

// process.chdir(__dirname);
console.log(path.join('js', 'test.js'))
console.log(path.resolve(__dirname, '.gitignore'))

const source = path.resolve(__dirname, '.gitignore');
const dest = path.resolve(__dirname, '.gitignore.copy');

// SYNC
try {
  const content = fs.readFileSync(source, { encoding: 'UTF-8' });
  fs.writeFileSync(dest, content);
  console.log('Copy Sync Done');
} catch (err) {
  console.log(err.message);
}

// ASYNC
// Callback Hell / Pyramid of Doom
// callbackhell.com
fs.readFile(source, { encoding: 'UTF-8' }, (err, content) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(dest, content, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy Async Done');
      }
    });
  }
});


// ASYNC Promise
fs.promises.readFile(source, { encoding: 'UTF-8' })
  .then((content) => fs.promises.writeFile(dest, content))
  .then(() => console.log('Copy Async Promise Done'))
  .catch((err) => console.log(err.message));

// ES2017 async/await
(async function () {
  try {
    const content = await fs.promises.readFile(source, { encoding: 'UTF-8' });
    await fs.promises.writeFile(dest, content);
    console.log('Copy Async Async/Await Done');
  } catch (err) {
    console.log(err.message);
  }
})();


// Hydride
(async function () {
  const content = await fs.promises.readFile(source, { encoding: 'UTF-8' });
  await fs.promises.writeFile(dest, content);
  console.log('Copy Async Async/Await Done');
})().catch((err) => console.log(err.message));

