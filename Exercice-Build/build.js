const fs = require('fs-extra');
const path = require('path');
const crypto = require('crypto');
const argv = require('yargs').argv;
const Terser = require('terser');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function removeAndMkdir(dir) {
  await fs.remove(dir);
  await fs.mkdir(dir);
}

async function concatFiles(files, dest) {
  const buffers = await Promise.all(files.map((file) => fs.readFile(file)));
  await fs.writeFile(dest, Buffer.concat(buffers));
}

async function transform(source, dest, cb) {
  const content = await fs.readFile(source, { encoding: 'UTF-8' });
  const contentTransformed = cb(content);
  await fs.remove(dest);
  await fs.writeFile(dest, contentTransformed);
}

async function minifyJs(file) {
  const content = await fs.readFile(file, { encoding: 'UTF-8' });
  const { code, error } = Terser.minify(content);

  if (error) {
    throw new Error('Error during minification');
  }

  await fs.remove(file);
  await fs.writeFile(file, code);
}

async function hashFile(file) {
  const content = await fs.readFile(file, { encoding: 'UTF-8' });
  const hash = crypto
    .createHash('md5')
    .update(content)
    .digest('hex');

  const destFile = file.replace('.js', `.${hash}.js`);

  await fs.move(file, destFile);

  return hash;
}

(async () => {
  await removeAndMkdir(distPath);
  await concatFiles([horlogeJsPath, indexJsPath], appJsDistPath);
  await transform(indexHtmlPath, indexHtmlDistPath, (content) => {
    content = content.replace(
      /<script.*<\/script>/s,
      '<script src="./app.js"></script>',
    );
    return content;
  });

  // 5 - Minifier le fichier
  // uniquement si le programme est appelé
  // avec l'option --minify
  // pour récupérer les options, libs :
  // yargs, minimist
  if (argv.minify) {
    await minifyJs(appJsDistPath);
  }

  // 6 - Ajouter un hash au nom du fichier
  // option --hash
  if (argv.hash) {
    const hash = await hashFile(appJsDistPath);
    await transform(indexHtmlDistPath, indexHtmlDistPath, (content) => {
      content = content.replace(
        '<script src="./app.js"></script>',
        `<script src="./app.${hash}.js"></script>`,
      );
      return content;
    });
  }
})().catch(console.log);
