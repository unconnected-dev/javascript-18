//This function is asynchronous
function getSpecificNumber() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(42), 2000);
	});
}

//There is a waiting time of 2 seconds before this 
//number gets printed to the console
//This is due to await
if(true){
	async function f() {
		const randomNumber = await getSpecificNumber();
		console.log(randomNumber);
	}

	f();
}

//This is the same as above
//In fact they console.log at the same time
if(true){
	function g() {
		getSpecificNumber()
			.then(randomNumber => console.log(randomNumber));
	}
	g();
}