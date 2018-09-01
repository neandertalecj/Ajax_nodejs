
var arrayCounter = function(array) {
	return 'В масиві знаходиться ' + array.length + ' елемента';
}

// console.log(arrayCounter([2, 6, 78, 76]));

var multiply = function(x, y){
	return `${x} помножити ${y} буде: ${x*y}`;
}

var some_value = 435;

// module.exports.arrayCounter = arrayCounter;
// module.exports.multiply = multiply;
// module.exports.some_value = some_value;

module.exports = {
	arrayCounter: arrayCounter,
	multiply: multiply,
	some_value: some_value
}