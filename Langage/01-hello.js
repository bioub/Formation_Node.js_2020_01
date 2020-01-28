const names = ['Jean', 'Eric', 'Pierre'];

/**
 * Dit bonjour
 * @param {string} name Le nom de la personne
 * @returns {string} Le message de salutations
 */
function hello(name = '') {
  return `Hello ${name.toUpperCase()}`;
}

names.forEach((n) => {
  console.log(hello(n));
});
