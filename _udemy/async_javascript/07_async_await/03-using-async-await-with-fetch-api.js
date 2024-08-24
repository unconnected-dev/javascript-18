"use strict";


//Function using promise-like syntax (.then)
//This function fetches a random dog image from an API
function getRandomDogImage() {

	// The fetch() function returns a Promise that resolves to the Response object
	fetch('https://dog.ceo/api/breeds/image/random')

		//The first .then() method is used to process the Response object and 
		//extract the JSON data
	    .then(response => response.json())
	    
		//The second .then() method is used to access the parsed JSON data, where 
		//`value.message` contains the image URL
		.then(value => console.log(value.message));
}


//The same function using async await syntax
async function getRandomDogImage() {
	
	//The fetch() call is awaited, pausing execution until the Promise resolves to 
	//the Response object
	let response = await fetch('https://dog.ceo/api/breeds/image/random');
	
	//The response.json() method is also awaited, pausing execution until the JSON
	//data is fully parsed
	value = await response.json();
	
	//The parsed JSON data is then logged to the console
	console.log(value.message);
}


//Using fetch() with Promises (.then()):
// - The fetch() function initiates a network request and returns a Promise that 
//	 resolves to a Response object
// - The .then() method is used to wait for the response and convert it into a 
//	 usable format, such as JSON
// - You can chain multiple .then() calls to process the data step by step

//Using fetch() with async/await:
// - The async/await syntax simplifies working with Promises by allowing you to 
//	 write asynchronous code that looks more like synchronous code.
// - await pauses the execution of the function until the Promise is resolved, 
//	 making it easier to work with asynchronous operations.
// - This approach improves readability, especially when dealing with multiple 
//	 asynchronous operations.

//Comparison Between .then() and async/await:
// - Both approaches achieve the same result, but async/await provides a cleaner 
//	 and more readable syntax, especially when multiple asynchronous calls are involved
// - Using async/await also makes error handling easier with try...catch blocks,
// 	 which is more intuitive than chaining .catch() for each asynchronous operation