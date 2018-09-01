
var fs = require('fs');

var myReadShort = fs.createReadStream(__dirname + '/article.txt', 'utf8');

// myReadShort.on('data', function(chunk) {
// 	console.log('\n\n\n\n\n\nНові дані получені:\n\n\n\n\n\n' + chunk);
// });

var myWriteShort = fs.createWriteStream(__dirname + '/news.txt');

myReadShort.on('data', function(chunk) {
	console.log('Нові дані получені');
	myWriteShort.write(chunk);
});
