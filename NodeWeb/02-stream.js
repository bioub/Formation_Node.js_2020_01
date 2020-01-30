// WriteStream
process.stdout.write('Log dans la console');
process.stdout.write('!!!\n\n');

// ReadStream
process.stdin.on('data', (data) => {
  console.log(data.toString());
});

// DuplexStream (net) : Read + Write

// TransformStream : DuplexStream Read / Modify / Write

// Pipe method
// cat .gitignore | gzip | echo
const fs = require('fs');
const { createGzip } = require('zlib');

const readStream = fs.createReadStream('.gitignore');
readStream.pipe(createGzip()).pipe(process.stdout);
