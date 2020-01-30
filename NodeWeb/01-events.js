const { EventEmitter } = require('events');

const events = new EventEmitter();

events.on('user.created', (user) => {
  console.log('Send email to ' + user.name);
});

events.once('user.created', (user) => {
  console.log('Send SMS to ' + user.name);
});

// un utilisateur s'inscrit
process.nextTick(() => {
  events.emit('user.created', { name: 'Romain' });
  events.emit('user.created', { name: 'Toto' });
});

console.log('FIN');
