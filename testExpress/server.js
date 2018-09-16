const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var jsonParser = bodyParser.json();

app.use(express.static('public'));

app.get('/test', function(req, res) {
	res.json({name: 'VASYL', suname: 'Kurtash'});
	// res.send('ljhyfof');
});

app.post('/login', jsonParser, function (req, res) {
  // create user in req.body
  console.log(req.body);
  res.sendStatus(200);
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server running at port ${port}`);
});
