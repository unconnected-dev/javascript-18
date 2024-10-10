"use strict";


//function that takes another function as a parameter
//this is a callback
if(false){
    function runThis(otherFn){
        console.log(`Running...`);
        otherFn();
    }

    runThis(function(){
        console.log(`Function 1...`);
    });

    runThis(function(){
        console.log(`Function 2...`);
    });
}


//promise
//a standardized approach to dealing with asynchronous events and callbacks

//a promise represents a future value?


//breakdown of promise
//the basic concept minus error handling etc
if(false){
    const PENDING = 0
    const FULFILLED = 1;
    const REJECTED = 2;

    //executor is a function
    //a prommise object doesn't do anything
    //it wraps up the idea of waiting for something to complete
    //and figuring out what to do after that work is complete
    function CustomPromise(executor){
        let state = PENDING;
        let value = null;
        //may want more than one callback to run after complete
        let handlers = [];
        //may want more than one function if something goes wrong
        let catches = [];

        //this is called by the executor
        function resolve(result){
            
            //promises are called one and done functions
            //meaning once PENDING has changed, the state will not be
            //changed again
            if(state !== PENDING) return;

            state = FULFILLED;
            value = result;
            //each handler function will then recieve the result
            handlers.forEach((h) => h(value));
        }

        function reject(){
            if(state !== PENDING) return;

            state = REJECTED;
            value = err;
            //each catch function will recieve the error
            catches.forEach((c) => c(err));
        }

        //takes whatever the callback function is 
        //and does one of two things

        this.then = function(callback){
            //if .then is called and the promise is already resolved 
            
            if(state === FULFILLED){
                //execute the callback immediately
                callback(value);
            } else {
                //add the callback to the array of handlers
                handlers.push(callback);
            }

            //not including catch due to being example

        }

        //run the executor, pass in the resolve, reject functions
        executor(resolve, reject);
    }

    const doWork = (res, rej) => {
        setTimeout(() => {
            res(`Hello World`)
        }, 1000);
    }

    let someText = new CustomPromise(doWork);

    //adds a function to the array of handlers in the CustomPromise object instance
    someText.then((val) => {
        console.log(`1: ${val}`);
    });

    someText.then((val) => {
        console.log(`2: ${val}`);
    });

    //handlers added after the promise is resolved, are executed straight away
    //because they don't need to wait for the value
    setTimeout(() => {
        someText.then((val) => {
            console.log(`3: ${val}`);
        });
    }, 3000);
}


//below we use actual javascript promise 
//if callback does something that requires to wait for return value
//we could chain the sequence of events, to prevent nesting
if(true){

    const doWork = (resolve, reject) => {
        setTimeout(() => { resolve(`Hello World`) }, 1000);
    };

    const doOtherWork = (resolve, reject) => {
        setTimeout(() => { resolve(`How are you?`) }, 3000);
    };

    let someText = new Promise(doWork);

    //because of chaining we don't need to do this
    if(false){
        let someOtherText = someText.then((val) => {
            console.log(`1: ${val}`);

            //if the handling function returns a value
            //.then will return another promise 
            return `How are you??`;
        });

        someOtherText.then((val) => {
            console.log(`2: ${val}`);
        });   
    }

    if(false){
        //one handler has been attached to the someText promise
        //then another handler has been attached to the returned promise
        //from someText
        someText.then((val) => {
            console.log(`1: ${val}`);

            //if the handling function returns a value
            //.then will return another promise 
            return `How are you???`;
        })
        //val will be `How are you???`
        .then((val) => {
            console.log(`2: ${val}`);
        }); 
    }

    if(false){
        
        //.then always returns a promise
        someText.then((val) => {
            console.log(`1: ${val}`);

            //if i return a new promise with the other executor function
            //this could allow us to have a sequence of .then
            return new Promise(doOtherWork);
        })
        .then((val) => {
            console.log(`2: ${val}`);
        }); 
    }
}


//a somewhat real world example
if(false){
    fetch("video.json")
    .then(response => response.json())
    .then(data => console.log(`data: ${data}`));
}


//thennable object
//an object that has a `then` function
if(false){
    somePromise.then((val) => {
        return anotherPromise;
    }).then((val) => {
        return custom_object_not_a_promise;//thennable
    }).then((val) => {
        return yetAnotherPromise;
    });
}



if(true){
    const doWork = (resolve, reject) => {
        setTimeout(() => { resolve(`Hello World`) }, 1000);
    };

    const doOtherWork = (resolve, reject) => {
        setTimeout(() => { resolve(`How are you?`) }, 1000);
    };

    //async and await are syntactic sugar
    async function doAllTheWork(){
        const someText = new Promise(doWork);
        const text1 = await someText;
        console.log(`1: ${text1}`);

        const otherText = new Promise(doOtherWork);
        const text2 = await otherText;
        console.log(`2: ${text2}`);
    }

    doAllTheWork();
    console.log(`Done`);
}