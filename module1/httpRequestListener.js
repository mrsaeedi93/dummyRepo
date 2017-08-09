var http = require('http');

var server = http.createServer(function(request, response) {
	console.log('got a req!');
	response.write('hi');
	response.end();
});

server.listen(3000);
