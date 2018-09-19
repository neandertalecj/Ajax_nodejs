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

// function fetch1(){
		var hd = new Headers({'Content-Type': 'application/json'});

		var int = {
			method: 'GET',
			headers: hd
		}

		var req = new Request('https://api.github.com/users/swapnilbangare', int);

		fetch(req)
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.log('Something went wrong', err));
// }

// --------------------------------------------------
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

var myImage = document.querySelector('.my-image');

var myHeaders = new Headers();

var myInit = {
	method: "GET",
	headers: myHeaders,
	mode: 'cors',
	cache: 'default'
}

var myRequest = new Request('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg', myInit);

fetch(myRequest)
// fetch('https://sraka')
	.then(res => {
		if(res.ok) {
			return res.blob()
		}
		throw new Error('Network response was not ok');
	})
	.then(res => {
		  console.log(res)
		var objectURL = URL.createObjectURL(res);
		  console.log(objectURL);
		myImage.src = objectURL;
	})
	.catch(err => console.log('There has been a problem with your fetch operator: ' + err.message));