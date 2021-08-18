const path = require('path');

// Gives seperator (/)
console.log(path.sep);

// Joining tghe path
//join gives seperator and limitor on its own
const joiningPath = path.join('Content', 'subfolder', 'hello.txt');

console.log(joiningPath);

// Gettinng thhe last path of the file
const base = path.basename(joiningPath);
console.log(base);

// Getting absolute Path
//Since we are working outside the browser we need the whole absolute path
// So global __dirname gives other path of the environment
const absolutePath = path.resolve(
	__dirname,
	'Content',
	'subfolder',
	'hello.txt'
);
console.log(absolutePath);
