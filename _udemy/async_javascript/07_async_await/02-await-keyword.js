"use strict";


//This function is asynchronous
//It returns a Promise that resolves with the value 42 after a 2-second delay
function getSpecificNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(42), 2000);
	});
}



//The `await` keyword is used to pause the execution of an async function
//until the Promise it is awaiting is resolved or rejected. This is why there
//is a waiting time of 2 seconds before this number gets printed to the console
if(true){

	//Example of using `await` in an async function
	async function f() {
		//The function execution pauses here until getSpecificNumber() resolves
		//The resolved value (42) is assigned to the randomNumber variable
		const randomNumber = await getSpecificNumber();
		console.log(randomNumber);
	}

	f();//This calls the async function
}



//This is the same as above
//In fact, they console.log at the same time.
//The main difference is the use of `.then()` to handle the resolved value 
//instead of the `await` keyword
if(true){
	
	//Example of using `.then()` to handle a Promise
	function g() {
		//Here, getSpecificNumber() is called and returns a Promise
		//The `.then()` method is used to specify what to do with the resolved value
		getSpecificNumber()
			.then(randomNumber => console.log(randomNumber));
	}

	g();//This calls the function
}


//await Keyword:
// - The await keyword can only be used inside an async function
// - It pauses the execution of the function until the Promise it is awaiting is either 
//	 resolved or rejected
// - Once the Promise is resolved, the function continues, and the resolved value is returned

//await vs. .then():
// - Both await and .then() are used to handle Promises
// - await is generally more readable and results in cleaner code when dealing with multiple 
//	 asynchronous operations
// - .then() allows you to handle Promises outside of async functions or when chaining multiple 
//	 asynchronous operations

// Execution Timing:
// - Both await and .then() will cause the code to wait until the Promise resolves before executing
//   the next line, hence their behavior is equivalent in terms of timing for simple cases like this