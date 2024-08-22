"use strict";


//Example of using Fetch API
//The Fetch API provides an easy and modern way to make HTTP requests in JavaScript
//It returns a Promise that resolves to the Response object representing the
//response to the request
fetch('https://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
    
    .then(response => {
        
        //The first .then() block is where the response from the fetch request is handled
        //The response object contains various properties, such as status, headers, and the body
        console.log(response);       
        
        //The response.json() method is called to extract the JSON body content from the response
        //This method also returns a Promise that resolves to the JSON data
        return response
    })

    .then(response => response.json())//Converts the response to JSON format
    
    .then(data => console.log(data))//Logs the parsed JSON data to the console