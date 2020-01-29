// const hello = require('../src/hello');
// console.log(hello.hello(1, 2)); // 3

// const hello = require('../src/hello').hello;
// console.log(hello(1, 2)); // 3

// const { hello } = require('../src/hello');
// console.log(hello(1, 2)); // 3

const assert = require('assert'); // binaire de node
const chalk = require('chalk'); // node_modules
const hello = require('../src/hello'); // fichiers locaux

try {
  assert.equal(hello('Romain'), 'Hello Romain');
  console.log(chalk.green('OK'));
} catch (error) {
  console.log(chalk.red('Erreur : ' + error.message));
  process.exit(1);
}
