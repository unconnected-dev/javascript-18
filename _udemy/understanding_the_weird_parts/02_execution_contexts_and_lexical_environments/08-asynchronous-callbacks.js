"use strict";



//Asynchronous
//Asynchronous means that more than one thing can happen at a time, but this 
//concept is handled outside the core JavaScript engine. While JavaScript itself
//is single-threaded and synchronous, the environment can handle asynchronous tasks

//What happens inside the JavaScript engine is synchronous (one task at a time).
//However, other parts of the browser, like rendering, handling user input, and 
//fetching data, can operate asynchronously


//Event Queue (Task Queue)
//The event queue (also known as the task queue) is where events are stored when
//they need to be processed by the JavaScript engine. When an asynchronous event
//(like a click or timer) occurs, the browser places it in the event queue to be
//processed later

//Event Loop
//The event loop is responsible for checking the event queue. JavaScript checks 
//the event queue only when the execution stack is empty. This means that the
//current task (whatever is running in the execution stack) must finish before
//JavaScript processes any events in the queue

//Execution Stack
//The execution stack is where JavaScript keeps track of what function is currently
//running. When you call a function, a new execution context is created and pushed 
//onto the stack. JavaScript will only look at the event queue once the execution 
//stack is empty (i.e., no other tasks are running)



//Event Processing Flow
// - When an event occurs (like a click or a timeout), it is added to the event queue
// - JavaScript continues running synchronous code in the execution stack
// - Once the stack is empty, the event loop checks the event queue
// - If there are events in the queue, JavaScript will process the first one by running
//   its associated callback function, creating a new execution context for it
// - The event loop will then process the next event, but only when the stack is empty again


// Example of a Long-Running Function
function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log(`Finished function`);
}

function clickHandler(){
    console.log(`Click event!`);
}

//Register a click event listener
document.addEventListener('click', clickHandler);

//This long-running function simulates blocking code
waitThreeSeconds();
console.log(`Finished execution`);


//Explanation:
// 1. When `waitThreeSeconds()` runs, it blocks the JavaScript execution for 3 seconds
//    (due to the `while` loop)
// 2. If the user clicks the page during this time, the click event is placed in the
//    event queue
// 3. However, the click event won't be processed immediately because the JavaScript
//    engine is busy running `waitThreeSeconds()`
// 4. Only after `waitThreeSeconds()` finishes and the execution stack is empty does
//    JavaScript look at the event queue
// 5. The click event is then processed, and `clickHandler()` is executed



//Long-running functions:
//A function that takes a long time to execute (like `waitThreeSeconds()`) can block the
//execution stack and prevent JavaScript from checking the event queue. This means 
//asynchronous events like user clicks or timers will be delayed until the stack is empty

//Event Queue and Event Loop:
//The event loop constantly checks if the execution stack is empty, and if it is, it 
//processes the next event from the event queue

//Synchronous vs. Asynchronous:
//JavaScript handles synchronous code in the execution stack first and only deals with 
//asynchronous events from the event queue after the stack is clear. This is why JavaScript
//behaves synchronously, even though it can handle asynchronous events