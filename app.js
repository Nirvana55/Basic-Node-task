const { readFile } = require('fs');

// Usin a promise to create a read file
const getText = (path) => {
	// Promise
	return new Promise((resolve, reject) => {
		// Passing the path
		// utf-9 is encoding else it will start buffering
		//err/data are error and data of the path
		readFile(path, 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

// Creating a async function so that it will awaiit and wont block the other code
const asyncing = async () => {
	try {
		const files = await getText('./Content/subfolder/hello.txt');
		console.log(files);
	} catch (error) {
		console.log(error);
	}
};

// Calling the asyncing function
asyncing();
