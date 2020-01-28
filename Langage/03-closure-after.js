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
