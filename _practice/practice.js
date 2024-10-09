"use strict";


//Basic Promise - ChatGPT
if (false){
    //Simulate an asynchronous operation using a Promise
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = "Hello, world!";
                resolve(data);
            }, 2000);
        });
    }

    //Asynchronous function using async/await
    async function getData() {
        console.log("Fetching data...");
        const data = await fetchData(); // Waits until the promise resolves
        console.log("Data received:", data);
    }

    //Call the async function
    getData();
}


//Basic Promise
if(false){
    function fetchData(){
        return new Promise((resolve, reject)=> {
                setTimeout(() => {
                const someData = { id:1, name: "paul"}
                resolve(someData);
            }, 1000);
        });
    }

    async function getData() {
        console.log("fetching data...");
        const data = await fetchData();
        console.log(`Data ${data.id}`)
    }

    async function test(){
        await getData();
        console.log("Done")
    } 
    test();
}


if(false){
    function fetchData(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let error = true;

                if (error){
                    reject("Failed to fetch user");
                }
                else{
                    resolve( {id: 1, name: "paul2"} );
                }
            })
        })
    }

    async function getData(){
        console.log("fetching data");
        const data = await fetchData();
        console.log(`Data ${data}`)
    }

    getData();
}


if(false){
    console.log("running file");

    const myPromise = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve("a text string");
        }, 2000);        
    });

    async function f(){
        const value = await myPromise;
        
        console.log(`value: ${value}`);
    }

    f();
}


if(false){
    let myObject = {
        testname: "test",
        self: this,

        callme: function(){
            console.log(this);

            function subcall(self){
                console.log(`subcall: ${this}`);
                console.log(`subcall: ${self}`);
            }

            let othercall = function(self){
                console.log(`othercall: ${this}`);
                console.log(`othercall: ${self}`);
            }

            subcall(this);
            othercall(this);
        }
    }

    myObject.callme();
}


//Wanted to check if instanceFields and properties had any meaningful difference
if(false){
    class myObject {
        instanceField = `instanceField`;

        constructor(){
            this.prop = `prop`;
        }

        test() {
            console.log(`instanceField: ${this.instanceField}`);
            console.log(`prop: ${this.prop}`);
        }
    }

    let test = new myObject();
    test.test();
    test.instanceField = `john`;
    test.prop = `doe`;
    test.test();
}