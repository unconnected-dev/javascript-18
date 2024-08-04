//This will not run in node


//Making 2 HTTP requests one after another
//using XMLHttpRequest

//The issue is that the calls become nested within
//A HTTP request can only be sent after the first has completed

//If multiple HTTP requests were needed (like 4+)
//This code block would only become larger and mor unreadable
//Making it difficult to debug

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://dog.ceo/api/breeds/list/all');
xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(xhr.responseText);
        const breeds = Object.keys(response.message);
        const firstBreedInTheList = breeds[0];

		const xhr2 = new XMLHttpRequest();
		xhr2.open('GET', `https://dog.ceo/api/breed/${firstBreedInTheList}/images/random`);
		xhr2.onreadystatechange = function() {
    		if (xhr2.readyState === XMLHttpRequest.DONE) {
        		console.log(xhr2.responseText);
    		}
		}

		xhr2.send(null);
    }
}

xhr.send(null);