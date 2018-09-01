// function test() {
// 	console.log("Hello world!");
// 	console.log(__dirname);
// 	console.log(__filename);
// }

// test();

var things = require('./array');

console.log(things.arrayCounter([2, 6, 78, 76]));
console.log(things.multiply(4, 5));
console.log(things.some_value);

// ---------------------------------
var events = require('events');

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text) {
	console.log('-----   -----   ------   -----   -----   -----   ');
	console.log(text);
});

myEmit.emit('some_event', 'Обробщик події спрацював'); //ніби по кнопці клацнули

// -- -- -- -- --

var events1 = require('events');
var util  = require('util');

var Cars = function(model) {
	this.model = model;
}

util.inherits(Cars, events1.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('AUDI');
var volvo = new Cars('VOLVO');

var car = [bmw, audi, volvo];

car.forEach(function(car) {
	car.on('speed', function(text){  
		console.log(car.model + ' speed is - ' + text);
	});
});

bmw.emit('speed', '254,4 km/hour'); //ніби по кнопці клацнули

// -----------------------------------------------------------
// -----------------------------------------------------------

var fs = require('fs');

var file_readed = fs.readFileSync('text.txt', 'utf8');

console.log(file_readed);

var message = 'Hello world!\n' + file_readed;

fs.writeFileSync('some_new_file.txt', message);
// -- -- --

fs.readFile('text.txt', 'utf8', function(err, data) {
	console.log(data);
});
	console.log('Test');

fs.writeFile('some.txt', 'Hi, its me', function(err, data) {});
