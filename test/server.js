var http = require('http');
var fs = require('fs');

function getInf(res, status, mimeType, url) {
    //res.writeHead(200, {'Content-Type': mimeType + '; charset = utf-8'});
	// var myReadShot = fs.createReadStream(__dirname + '/' + url, 'utf8');
	// myReadShot.pipe(res);
	fs.readFile(url, function(err, cont){
		// if (err) {
		// 	if (err.code = "ENOENT") {
		// 		getInf(res, 404, mimeTypes['html'], '404.html');
		// 	} else {
		// 		getInf(res, 500, mimeTypes['html'], '404.html'); //!!!
		// 	}
		// } else {
			res.writeHead(200, {'Content-Type': mimeType + '; charset = utf-8'});
			res.end(cont);
	    // }
	})
}

function getData(res, obj, mimeType) {
	res.writeHead(200, {'Content-Type': mimeType + '; charset = utf-8'});
	res.end(JSON.stringify(obj));
}


var mimeTypes = {
	'html': 'text/html',
	'json': 'application/json'
}

var obj = {name: 'Vasyl', surname: 'Kurtash'}
 

 var server = http.createServer(function(req, res) {
		switch(req.method) {
		case 'GET': 
			if (req.url === '/') {
				getInf(res, 200, mimeTypes['html'], 'home.html');
			} else if( req.url === '/json_file') {
				getInf(res, 200, mimeTypes['json'], 'file.json');		
			} else if( req.url === '/json') {
				getData(res, obj, mimeTypes['json']);
			} else {
				getInf(res, 404, mimeTypes['html'], '404.html');
			}
			break;
		case 'POST': 
			if (req.url === '/calc') {   //!!!!!!!!!!!!!!!!!!!!!!!!!!
				var reqBody = '';
				req.on('data', function(data) {
					reqBody += data;
					req.on('end', function (data) {
						var formData = qs.parse(reqBody);
						// getCalc(req, resp, formData);
					})
				})
			} else {
				getInf(res, 404, mimeTypes['html'], '404.html');
			}
			break;
		default: getInf(res, 405, mimeTypes['html'], '404.html');
			break;
	}
});

server.listen(3001);
console.log('Server running at port 3001');


