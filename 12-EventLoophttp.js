const http = require('http');
// This is a server req and response
const server = http.createServer((req, res) => {
	console.log('Server request message');
	res.end('server has responded');
});

//Since it is a callback it will just listen
//our server works as event loop it keeps on listening
//whenever it runs the system it will just wait for the req
//and runs when the requ
server.listen(5000, () => {
	console.log('Server responded ....');
});
