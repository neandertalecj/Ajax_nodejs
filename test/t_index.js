var mod = require('./t_array');

// console.log('The value is ' + mod.value);
// console.log(mod.getLength([4,5,6,7,8,]));
// console.log(mod.multiply(4, 5));
// console.log(mod.box);
// console.log(__dirname);
// console.log(__filename);

var events = require('events');
// var events1 = require('events');
var util = require('util');

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function(text) {
	console.log(text)
})

myEmit.emit('some_event', 'Event worcked');

function Car(model) {
	this.model = model;
}

util.inherits(Car, events.EventEmitter);

var audi = new Car('AUDI');
var bmw = new Car('BMW');
var volvo = new Car('VOLVO');

var cars = [bmw, audi, volvo];

cars.forEach(function(car) {
	car.on('speed', function(text) {
		console.log(car.model + ' speed is - ' + text);
	});
});

bmw.emit('speed', '245,5 km/hod');
audi.emit('speed', '240,5 km/hod');
volvo.emit('speed', '255,5 km/hod')


