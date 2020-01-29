// import random
// import readline
// import chalk

// class Jeu
const readline = require('readline');
const chalk = require('chalk');
const random = require('./random');


class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;

    // Object.assign(this, { min: 0, max: 100 }, options);

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.entierAlea = random.getInt(min, max);
    this.essais = [];
  }
  jouer() {
    if (this.essais.length) {
      console.log(chalk.bgWhite.black(`Vous avez déjà joué : ${this.essais.join(' - ')}.`));
    }

    this._rl.question(chalk.blue.underline('Quel est le nombre entier ? '), (answer) => {
      const entierSaisi = Number.parseInt(answer, 10);

      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur : il faut saisir un nombre'));
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        this.jouer();
      } else {
        console.log(chalk.green('Gagné'));
        this._rl.close();
      }
    });
  }
}

// export jeu
module.exports = Jeu;
