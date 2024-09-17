https://www.udemy.com/course/understand-javascript
https://github.com/AnthonyPAlicea/JavascriptUnderstandingTheWeirdParts



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

Global Context:
The default execution context that is created when the JavaScript engine starts
executing code. It is not inside any function or block; hence, it's referred to
as the "global" context