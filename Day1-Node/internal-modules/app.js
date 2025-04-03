const fs = require('node:fs');
fs.writeFileSync('hello.txt', 'Hello World!');
const data = fs.readFileSync('hello.txt', 'utf8');
console.log(data);
