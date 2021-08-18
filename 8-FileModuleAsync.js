const { readFile, writeFile } = require('fs');
// It is the asynchronous source of the file system module
// In this readFile we need to create a call back to take the value
// To async more than two files we need to create read file in the call back and write file inside it
readFile('./Content/subfolder/hello.txt', 'utf-8', (error, text) => {
	if (error) {
		console.log(error);
		return;
	}
	// Passing the value in first varibale
	const first = text;
	readFile('./Content/subfolder/Sambule.txt', 'utf-8', (error, text) => {
		if (error) {
			console.log(error);
			return;
		}
	});
	// Passing variable
	const second = text;
	// Writing file and create a new file
	//if it doesnot exist node will create a new one
	writeFile(
		'./Content/asyncText.txt',
		`these are the files ${first} ${second}`,
		// Using flag a to append
		{ flag: 'a' },
		(error, text) => {
			if (error) {
				console.log(error);
				return;
			}
		}
	);
});
