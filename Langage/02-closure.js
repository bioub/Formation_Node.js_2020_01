globalThis.porteeGlobale = 'porteeGlobale';
const porteeModule = 'porteeModule';

function externe() {
  const porteeClosure = 'porteeClosure';
  function interne() {
    const porteeLocale = 'porteeLocale';
    console.log(porteeLocale, porteeClosure, porteeModule, porteeGlobale);
    debugger;
  }
  interne();
}

externe();

// ^
// |lg
// |interne
// |externe
// +---------------------->
