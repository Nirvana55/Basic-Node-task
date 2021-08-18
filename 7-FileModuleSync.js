//importing the File system method
//this is the synchronous approch of file system method
const { readFileSync, writeFileSync, read } = require('fs');

// Readfilesynce reads the file and utf-8 is the encoding and it is the default encoding
const hello = readFileSync('./Content/subfolder/hello.txt', 'utf-8');
const sambule = readFileSync('./Content/subfolder/Sambule.txt', 'utf-8');

// Write File creates or overwrite the file
//This is the method to create a file from scratch
//flag a helps to append the file
const overWrite = writeFileSync(
	'./Content/overwrite.txt',
	`These are the file of subfolder ${hello} ${sambule}, `,
	{ flag: 'a' }
);

console.log(hello, sambule);
