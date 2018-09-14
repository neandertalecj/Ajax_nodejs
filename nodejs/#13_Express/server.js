var express = require('express');

var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	// res.send('This is home');
	res.sendFile(__dirname + '/index.html');
})
app.get('/news', function(req, res) {
	res.send('This is news');
})

app.get('/news/:id', function(req, res) {
	res.send('ID is - ' + req.params.id);
})

app.listen(3000);
console.log('Port 3000');