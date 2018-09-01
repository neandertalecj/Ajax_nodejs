
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res) {
	console.log('URL of page: ' + req.url);

	// res.writeHead(200, {'Content-Type': 'text/plan; charset=utf-8'});
	// var myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');

	// res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
	// var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');

	// myReadShort.pipe(res);

	res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

	var obj = {
		model: 'Audi',
		speed: '245',
		wheels: 4
	}

	res.end(JSON.stringify(obj));
});

server.listen(3000, '127.0.0.1');
console.log('We are watching a port 3000');