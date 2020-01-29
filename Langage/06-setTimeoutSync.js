function setTimeoutSync(cb, delay) {
  // bloquer le thread principale delay ms
  const debut = Date.now();
  while (Date.now() - debut < delay);

  cb();
}

// ...1s... 0 ...1s... 1 ...1s... 2
for (var i=0; i<3; i++) {
  setTimeoutSync(function() {
    console.log(i);
  }, 1000);
}


function pause(delay) {
  // bloquer le thread principale delay ms
  const debut = Date.now();
  while (Date.now() - debut < delay);
}

// ...1s... 0 ...1s... 1 ...1s... 2
for (var i=0; i<3; i++) {
  pause(1000);
  console.log(i);
}
