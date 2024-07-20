const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js');
console.log(base1);
console.log(base2);

// extname
const ext = path.extname(myFilePath);
console.log(ext);

// Directory Name
const dir = path.dirname(myFilePath);
console.log(dir);

// join()
const myPath = path.join('subfolder', 'anotherFolder', 'index.js');
console.log(myPath);

// resolve ()
const resolve = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(resolve);

// __dirname
console.log(__dirname);

// __filename
console.log(__filename);
