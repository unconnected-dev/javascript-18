"use strict";


//Simulates an asynchronous operation with a delay, returning a resolved promise after 1 second
function printNumber1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`printNumber1 is done`);
            resolve(1);
        }, 1000);
    });
}

//Another asynchronous operation with a similar delay, returning a resolved promise after 1 second
function printNumber2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`printNumber2 is done`);
            resolve(2)
        }, 1000);
    });
}



//Example 1: Sequential Execution
if(false){
    async function oneByOne(){
        //Sequentially waits for printNumber1() to complete before starting printNumber2()
        const number1 = await printNumber1();//Waits 1 second
        const number2 = await printNumber2();//Waits another second
        console.log(`${number1}, ${number2}`);
    }

    oneByOne();
}


//Example 2: Parallel Execution
if(true){
    async function inParallel(){
        //Initiates both asynchronous operations without waiting for each to complete
        const promise1 = printNumber1();
        const promise2 = printNumber2();

        // const number1 = await promise1;
        // const number2 = await promise2;
        // console.log(`${number1}, ${number2}`);

        // const [number1, number2] = [await promise1, await promise2];
        // console.log(`${number1}, ${number2}`);


        //Waits for both promises to resolve, but they are running in parallel
        //The total time taken is the maximum of the individual times, not their sum
        console.log(`${await promise1}, ${await promise2}`);
    }

    inParallel();
}



//Sequential Execution: 
// - Operations are performed one after the other. Each subsequent operation waits for the 
//   previous one to complete. This can lead to longer total execution times but ensures that
//   tasks are done in order

//Parallel Execution:
// - Multiple operations are initiated at the same time and run concurrently. This reduces the
//   total execution time but requires that the tasks do not depend on each other’s results