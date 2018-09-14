var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	// res.send('This is home');
	res.sendFile(__dirname + '/index.html');
})
app.get('/about', function(req, res) {
	res.sendFile(__dirname + '/about.html');
})

app.get('/news/:id', function(req, res) {
	res.send('ID is - ' + req.params.id);
})

app.post('/about', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body)
  // res.render('about') це від шаблонізатора
  res.sendFile(__dirname + '/about.html');
})

app.listen(3000);
console.log('Port 3000');