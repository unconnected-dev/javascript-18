"use strict";


//Synchronous code executes in a sequential manner where
//each step must complete before the next one starts
//In other words, it goes in order and is unable to do
//anything else while an action is waiting to complete

//Asynchronous code, on the other hand, allows for other 
//operations to happen while waiting for a previous action 
//to complete
//This means that the program doesn't have to wait for a 
//task (like a file read or a network request) to finish 
//before moving on to the next task



//This is a synchronous function
//The number 1 will be printed to console immediately
function print1(){
    const number1 = 1;
    console.log(`${number1}`)
}


//This is a synchronous function
//The number 2 will be printed to console immediately
function print2(){
    function getNumber2(){
        return 2;
    }
    
    const number2 = getNumber2();
    console.log(`${number2}`)
}


//This function invokes an asynchronous function
//Asynchronous functions allow the program to continue 
//running other code while waiting for an operation to 
//complete (like reading a file)

//print4() is called immediatly after print3(). it does
//not wait for the print3() async function to finish
function print3(){
    const fs = require('fs');//File system module, allows for file operations
    const path = require('path');//Path module, helps with file paths
    const filePath = path.resolve(__dirname, 'doc/number3.txt');

    //fs.readFile is an asynchronous function that reads a file from the filesystem
    fs.readFile(filePath, 'utf-8', function(err, number3){
        if(err){
            console.error('Error reading file:', err);
            return;
        }
        console.log(`${number3}`);

        //print4() is called here to ensure it runs only after 
        //the file has been read successfully.
        print4();
    });

    //This line will be printed to the console immediately after fs.readFile is called
    //without waiting for the file read operation to complete
    console.log("Printed immediately after the async function being called");
}


//This is a synchronous function
//The number 4 will be printed to console immediately
function print4(){
    const number4 = 4;
    console.log(`${number4}`)
}

print1();    //Synchronous: prints 1
print2();    //Synchronous: prints 2
print3();    //Asynchronous: starts erading the file, prints a message immediately
// print4(); //Synchronous, if invoked inside the print3 function will print in order
             //if outside of print3 function, will print out of order