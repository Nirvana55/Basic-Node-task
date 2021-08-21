// We can directly create a promise or use utils
const { readFile, writeFile } = require('fs').promises;

// we can use util to use promise
// const util = require('util');
// const readFilepromise = util.promisify(readFile);
// const writeFilepromise = util.promisify(writeFile);

// Usin a promise to create a read file
// const getText = (path) => {
// 	// Promise
// 	return new Promise((resolve, reject) => {
// 		// Passing the path
// 		// utf-9 is encoding else it will start buffering
// 		//err/data are error and data of the path
// 		// readFile(path, 'utf-8', (err, data) => {
// 		// 	if (err) {
// 		// 		reject(err);
// 		// 	} else {
// 		// 		resolve(data);
// 		// 	}
// 		// });
// 	});
// };

// Since above promise will create a call back hell we should not try do it

// This asyncing will help to code blocking and unblocking phase
// Creating a async function so that it will awaiit and wont block the other code
const asyncing = async () => {
	try {
		const files = await readFile('./Content/subfolder/hello.txt', 'utf8');
		const files2 = await readFile('./Content/subfolder/sambule.txt', 'utf8');
		await writeFile(
			'./Content/subfolder/bambule.txt',
			`I would love to dance on the floor`,
			{ flag: 'a' }
		);
		console.log(files, files2);
	} catch (error) {
		console.log(error);
	}
};

// Calling the asyncing function
asyncing();
