"use strict";


//XMLHttpRequest is a browser API, so this code will not run in Node.js.


//This code snippet uses XMLHttpRequest to make two HTTP requests, one after the other
//The second request is dependent on the result of the first request

//The issue with this code is that the callbacks become nested within each other,
//making the code harder to read and maintain. This is often referred to as 
//"callback nesting" or "callback hell"

//If more HTTP requests were needed (4+ requests), the code block would become even
//larger and more unreadable, making it difficult to debug and maintain


//Create a new XMLHttpRequest object for the first request
const xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');

xhr.onreadystatechange = function() {
    //This function is triggered every time the readyState changes
	//When the request is complete (readyState is DONE)
    if (xhr.readyState === XMLHttpRequest.DONE) {

        const response = JSON.parse(xhr.responseText);	//Parse the JSON response from the first request
        const breeds = Object.keys(response.message);	//Extract the list of breeds from the response
        const firstBreedInTheList = breeds[0];			//Get the first breed from the list


		//Create a new XMLHttpRequest object for the second request
		const xhr2 = new XMLHttpRequest();
		xhr2.open('GET', `https://dog.ceo/api/breed/${firstBreedInTheList}/images/random`);

		xhr2.onreadystatechange = function() {
    	
            //This function is triggered every time the readyState changes for the second request
			//When the second request is complete, log the response (which is the image URL) 
			//to the console
			if (xhr2.readyState === XMLHttpRequest.DONE) {
        		console.log(xhr2.responseText);
    		}
		}

		xhr2.send(null); //Send the second HTTP request
    }
}

xhr.send(null); //Send the first HTTP request.