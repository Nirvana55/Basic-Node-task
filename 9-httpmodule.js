// This is the http module
const http = require('http');

// Creating a server
const servers = http.createServer((req, res) => {
	// req is the request to the server and response is what to response
	// If the url is requested than response is that
	if (req.url === '/') {
		res.end('Welcome to home page');
	}
	if (req.url === '/about') {
		res.end('This is the about page');
	}
	// If req is error it will response this
	res.end(`<h1>Opps!</h1>
    <p>Go to home page</p>
    <a href="/">Home</a>`);
});

// Creating a server to listen
servers.listen(5000);
