"use strict";


//Example 1: Task Queue with setTimeout
//The following outputs as 1, 3, 2
if(false){
    console.log(`1`);//Synchronous: Added to the call stack and executed immediately

    //setTimeout is an asynchronous function and its callback is placed in the task queue
    //The callback will be executed after the current stack is empty
    setTimeout(() => console.log(`2`), 0);
    
    console.log(`3`);//Synchronous: Added to the call stack and executed immediately

    //The call stack is executed first (1 and 3), then the task queue is checked and 2 is executed
}


//Example 2: Microtasks with Promises
if(false){
    console.log(`1`);//Synchronous: Added to the call stack and executed immediately

    //Promises use the microtask queue, which has a higher priority than the task queue
    //This means the callback in .then() will be executed before any tasks in the task queue
    Promise.resolve()
        .then(() => console.log(`2`));//Microtask: Executed after the current call stack is empty

    console.log(`3`);//Synchronous: Added to the call stack and executed immediately

    //The sequence: 1 and 3 are executed first, then the microtask queue is processed, so 2 is logged
}


//Example 3: Combining Promises and setTimeout
//The following outputs as 1, 4, 3, 2
//Promise executes before setTimeout due to different task priorities
if(true){
    console.log(`1`);//Synchronous: Added to the call stack and executed immediately
    
    // setTimeout is added to the task queue (lower priority)
    setTimeout(() => console.log(`2`), 0);
    
    //Promise resolves and its .then() is added to the microtask queue (higher priority)
    Promise.resolve()
        .then(() => console.log(`3`));
    
    console.log(`4`);//Synchronous: Added to the call stack and executed immediately

    //Execution order:
    //1 and 4 are logged immediately because they are synchronous
    //3 is logged next because microtasks are processed before tasks in the task queue
    //2 is logged last as it is in the task queue, which is processed after the microtask queue
}



//Call Stack:
// - The call stack is where synchronous code is executed. Functions are pushed onto the stack 
//   when they are called and popped off when they return
// - Synchronous code (like console.log) is executed immediately in the order it appears

//Task Queue (Macro Task Queue):
// - The task queue (or macro task queue) is where tasks like setTimeout, setInterval, or events
//   (e.g., click events) are placed
// - After the call stack is empty, tasks in the task queue are processed. This is why setTimeout
//   callbacks run after the synchronous code has executed

//Microtask Queue:
// - The microtask queue has a higher priority than the task queue. It includes tasks like Promise 
//   callbacks and process.nextTick in Node.js
// - After the current operation on the call stack completes, before the task queue is processed, 
//   all tasks in the microtask queue are executed

//Execution Order:
// - Synchronous Code: Runs first, immediately
// - Microtasks: After the call stack is cleared but before tasks in the task queue
// - Tasks (Macro Tasks): Executed last, after the microtask queue is cleared