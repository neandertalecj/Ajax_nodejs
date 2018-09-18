// alert('fetch');

// https://medium.com/beginners-guide-to-mobile-web-development/the-fetch-api-2c962591f5c
function touch() {
	function success() {
		var data = JSON.parse(this.responseText);
		console.log(data); 
	}

	function error(err) {
		console.log('Error Occuretted:', err);
	}

	var xhr = new XMLHttpRequest();

	xhr.onload = success;
	xhr.onerror = error;

	xhr.open('GET', 'https://api.github.com/users/swapnilbangare');
	// xhr.open('GET', '/'); //Error Occuretted: ProgressEvent {isTrusted: true,
	xhr.send();
}

// The main difference between Fetch and XMLHttpRequest is that the Fetch API uses Promises, hence avoiding callback hell.

// function fetch1(){
	fetch('https://api.github.com/users/swapnilbangare')
		.then(function(res){
			console.log(res); //маэмо інф про саму відповідь, а нам треба тіло відповіді
		})
		.catch(function(err){
			console.log('Something went wrong', err);
		});
// }

fetch('https://api.github.com/users/swapnilbangare')
	.then((res) => res.json())
	.then((data) => console.log(data))
	.catch((err) => console.log('Something went wrong', err));