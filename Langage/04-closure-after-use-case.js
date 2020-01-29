globalThis.porteeGlobale = 'porteeGlobale';
const porteeModule = 'porteeModule';

function externe() {
  const porteeClosure = 'porteeClosure';
  function interne() {
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale, porteeClosure, porteeModule, porteeGlobale);
    debugger;
  }
  return interne;
}

const interne = externe();
interne();

// ^
// |
// |          lg
// |externe - interne
// +---------------------->

// sans closure
// ...1s... 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

function saveI(iClosure) {
  return function() {
    console.log(iClosure);
  }
}

// avec closure
// ...1s... 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(saveI(i), 1000);
}

// avec closure
// ...1s... 0 1 2
for (let i=0; i<3; i++) {
  // portée de closure
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

