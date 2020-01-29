const Random = {
  // 1 - Method Property
  get: function () {
    return Math.random();
  },

  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
}

// import de fichier (contrairement au navigateur, la plupart
// des API doivent importés)
const readline = require('readline');

// 2 - class
function Jeu(options /* 3 - default param */) {
  options = options || {};

  // 4 - object destructuring + shorthand property + default param
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  this.entierAlea = Random.getInt(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function() {
  if (this.essais.length) {
    // 5 - Template literal
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
  }

  this._rl.question('Quel est le nombre entier ? ', (answer) => {
    const entierSaisi = parseInt(answer, 10);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      this.jouer();
    } else {
      console.log('Gagné');
      this._rl.close();
    }
  });
}

const game = new Jeu();
game.jouer();

// ^
// |             question      question
// |question     jouer         jouer
// |jouer        =>            =>
// +-------------------------------->
//
