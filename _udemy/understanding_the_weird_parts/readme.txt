https://www.udemy.com/course/understand-javascript
https://github.com/AnthonyPAlicea/JavascriptUnderstandingTheWeirdParts
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness



Syntax parser
A program that reads your code, interprets it, and checks if the grammar is valid
It converts your code into a format that the computer can execute (often called 
an abstract syntax tree)


Lexical environment 
The environment where variables and functions live in your code at a specific place
and time. It refers to the physical location of the code in terms of its hierarchy
and scope. It is created whenever code is executed in JavaScript
(functions, blocks, etc.)


Execution context
The environment in which JavaScript code is evaluated and executed. It consists of 
variables, objects, and functions that are accessible at a specific point in time 
during execution. There can be multiple lexical environments, and the execution 
context manages which one is currently active. The global execution context is 
created first, followed by function execution contexts as functions are invoked


Name / value pair
A name that maps to a value. The name can be defined multiple times in different 
contexts, but in any single context, it can only hold one value. The value can be 
another name/value pair (for example, when an object contains other objects or arrays)


Object
A collection of name/value pairs. In JavaScript, an object is the most basic structure
for organizing related data (often referred to as key-value pairs). It allows for nesting
objects within other objects to represent more complex data structures


Global Context
The default execution context that is created when the JavaScript engine starts
executing code. It is not inside any function or block; hence, it's referred to
as the "global" context


Hoisting
Hoisting refers to the process where variable and function declarations are moved 
to the top of their containing scope (global or function scope) during the creation
phase of the execution context. However, only declarations are hoisted, not 
initializations (variables are not assigned)


Single-threaded
JavaScript is single-threaded, meaning it can only execute one command at a time
From our perspective, JavaScript behaves as single-threaded, even though the 
browser can handle other tasks (like rendering)
However, JavaScript itself executes synchronously in a single-threaded manner


Synchronous
Code execution happens one line at a time and in the order it's written
This means that in JavaScript, only one thing is happening at any given moment
Asynchronous operations (like callbacks, promises, or async/await) exist but 
will be covered later


Invocation
Invocation refers to "running" or "calling" a function
In JavaScript, functions are invoked by using parentheses `()`


Variable Environment
The variable environment refers to the place where variables are stored in memory
It defines how variables relate to each other within different scopes and contexts


Asynchronous
Asynchronous means that more than one thing can happen at a time, but this 
concept is handled outside the core JavaScript engine. While JavaScript itself
is single-threaded and synchronous, the environment can handle asynchronous tasks

What happens inside the JavaScript engine is synchronous (one task at a time).
However, other parts of the browser, like rendering, handling user input, and 
fetching data, can operate asynchronously


Event Queue (Task Queue)
The event queue (also known as the task queue) is where events are stored when
they need to be processed by the JavaScript engine. When an asynchronous event
(like a click or timer) occurs, the browser places it in the event queue to be
processed later


Event Loop
The event loop is responsible for checking the event queue. JavaScript checks 
the event queue only when the execution stack is empty. This means that the
current task (whatever is running in the execution stack) must finish before
JavaScript processes any events in the queue


Execution Stack
The execution stack is where JavaScript keeps track of what function is currently
running. When you call a function, a new execution context is created and pushed 
onto the stack. JavaScript will only look at the event queue once the execution 
stack is empty (i.e., no other tasks are running)


Long-running functions
A function that takes a long time to execute can block the execution stack and prevent
JavaScript from checking the event queue. This means asynchronous events like user clicks
or timers will be delayed until the stack is empty


Outer Environment
Every execution context has a reference to its outer environment. The outer 
environment is the lexical environment where the function was defined in the
code. This reference helps the function access variables that are not defined 
inside its own scope


Scope Chain
The scope chain is a chain of outer references, where each execution context is 
linked to its outer environment, allowing access to variables from higher scopes


Scope
Scope determines where a variable is accessible in your code and whether it 
refers to the same variable or a new copy. Functions have their own local scope
and variables declared inside a function are not accessible outside of it


Block Scoping with `let` and `const`
Variables declared with `let` and `const` have block scope, meaning they are 
only accessible within the block (e.g., `{}`) they are declared in.
`let` and `const` are not hoisted to the top of their block like `var`, so 
they cannot be accessed before their declaration


Temporal Dead Zone (TDZ)
During the execution phase, variables declared with `let` and `const` are 
placed in memory but are not initialized. They remain in a "temporal dead zone"
until the line of code that declares the variable is executed. This means you
cannot use the variable before its declaration line is reached


Dynamic Typing
In JavaScript, variables are dynamically typed, meaning you don't explicitly
declare the type of data a variable holds. The JavaScript engine determines 
the variable type at runtime, based on the value assigned to it

This allows a variable to hold different types of values at different times
during code execution


Primitive Types
Primitive types are basic data types in JavaScript that represent a single value
and are not objects. They are immutable, meaning their value cannot be changed 
once created (although you can reassign variables to new values)

The five main primitive types in JavaScript:
    1. undefined
    2. null
    3. boolean
    4. number
    5. string

Additionally, ES6 (ECMAScript 2015) introduced a new primitive type:
    6. symbol


