// Importing to modules/Component
// We are using require
const { john, bruno } = require('./1-global');
const name = require('./2-utils');
const alternate = require('./3-alternateflavour');
require('./3-Mindgrenade');

console.log(alternate);
name(john);
name(bruno);
