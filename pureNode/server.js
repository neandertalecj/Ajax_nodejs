var http = require('http');
var qs = require('querystring');
var port = 3000;

	
function getHome(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.write(`<html>
					<head>
						<title>home</title>
					</head>
					<body>
						<h3>Hello</h3>
						<p>Want to do some calculation? </p>
						<a href='/calc'>Press here</a>
					</body>
				</html>`);
	res.end();
}

function getCalcForm(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.write(`<html>
					<head>
						<title>calc</title>
					</head>
					<body>
						<h3>Calculation</h3>
						<p>Some text </p>
						<a href='/'>Press here to go pagehome </a>
					</body>
				</html>`);
	res.end();
}

function get404(req, res) {
	res.writeHead(404, 'Resourse Not Found', {'Content-Type': 'text/html; charset=utf-8'});
	res.write(`<html>
					<head>
						<title>404</title>
					</head>
					<body>
						<p>Resourse Not Found</p>
						<a href='/'>Press here to go pagehome</a>
					</body>
				</html>`);
	res.end();
}


function get405(req, res) {
	res.writeHead(405, 'Method Not suppoted', {'Content-Type': 'text/html; charset=utf-8'});
	res.write(`<html>
					<head>
						<title>405</title>
					</head>
					<body>
						<p>Method Not suppoted</p>
						<a href='/'>Press here to go pagehome</a>
					</body>
				</html>`);
	res.end();
}



http.createServer(function(req, res) {
	switch(req.method) {
		case 'GET': 
			if (req.url === '/') {
				getHome(req, res);
			} else if( req.url === '/calc') {
				getCalcForm(req, res);
			} else {
				get404(req, res);
			}
			break;
		case 'POST': 
			if (req.url === '/calc') {
				var reqBody = '';
				req.on('data', function(data) {
					reqBody += data;
					if (reqBody.length > 1e7) { //10MB
						res.writeHead(413, 'Request Entity To Large', {'Content-Type': 'text/html; charset=utf-8'});
						res.write(`<html>
										<head>
											<title>413</title>
										</head>
										<body>
											<p>413:To much of information. Server can not handle this</p>
											<a href='/'>Press here to go pagehome</a>
										</body>
									</html>`);
						res.end();
					}

					req.on('end', function (data) {
						var formData = qs.parse(reqBody);
						// getCalc(req, resp, formData);
					})
				})
			} else {
				get404(req, res);
			}
			break;
		default: get405(req, res);
			break;
	}
}).listen(port);
console.log('Port is 3000');