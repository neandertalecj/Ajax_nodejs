var http = require('http');

// var server = http.createServer(function(req, res) {
// 	console.log('url o page: ' + req.url);
// 	// res.writeHead(200, {'Content-Type': 'text/plain; charset = utf-8'});
// 	res.writeHead(200, {'Content-Type': 'application/json; charset = utf-8'});
	
// 	var obj = {
// 		model: 'audi',
// 		speed: '243',
// 		wheele: 4
// 	}

// 	res.end(JSON.stringify(obj));
// });

// server.listen(3000);
function app(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json, charset = utf-8'});
	var obj = { a: 1, d: 3, d: 8}
	res.end(JSON.stringify(obj));
}

http.createServer(app).listen(3000);
console.log('Port 3000');

