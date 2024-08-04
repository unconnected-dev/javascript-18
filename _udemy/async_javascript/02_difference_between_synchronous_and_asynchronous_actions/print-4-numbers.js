"use strict";

function print1(){
    const number1 = 1;
    console.log(`${number1}`)
}

function print2(){
    function getNumber2(){
        return 2;
    }
    
    const number2 = getNumber2();
    console.log(`${number2}`)
}

//This function invokes an asynchronous function
//print4() is called immediatly after print3()
//print4() does not wait for print3() async function to finish
function print3(){
    const fs = require('fs');
    const path = require('path')
    const filePath = path.resolve(__dirname, 'number3.txt');

    //readFile is an async function
    fs.readFile(filePath, 'utf-8', function(err, number3){
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log(`${number3}`)
        //Add print4() here to ensure the correct order
        //As this only happens when readFile has been completed
        print4();
    });
    //This line goes to console without waiting for readFile to finish
    console.log("Printed immediatly after the async function being called");
}

function print4(){
    const number4 = 4;
    console.log(`${number4}`)
}

print1();
print2();
print3();
// print4();