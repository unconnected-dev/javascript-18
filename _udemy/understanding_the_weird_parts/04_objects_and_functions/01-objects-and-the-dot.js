"use strict";



//Dot Operator (.)
//The dot operator (.) is used to access object properties directly by name,
//like person.name. It’s simple and readable but only works with valid 
//property names that don’t contain spaces or special characters

//Computed Member Access Operator ([])
//The computed member access operator ([]) allows dynamic access to object 
//properties using a string or variable, like person['name'] or 
//person[dynamicKey]. It’s flexible and can handle property names with spaces
//or special characters



//Objects and Functions in JavaScript
//In other programming languages, objects and functions are usually distinct
//concepts. However, in JavaScript, they are closely related. Functions can 
//be properties of objects


//Objects in JavaScript are collections of name-value pairs (also known as 
//key-value pairs). These values can be of various types, including other 
//objects or functions
 
// - If an object has a primitive value (e.g., string, number) associated 
//   with a key, it's called a **property**
// - If an object has another object as a value, it's still considered a 
//   **property**
// - If a function is a value inside an object, it's called a **method** 
//   of the object

//Objects are stored in memory with an address, and properties or methods 
//are stored as references to other memory locations



//Creating Objects

//This method (using 'new Object()') is not the preferred way of creating 
//objects in JavaScript. Instead, object literals `{}` are more concise and
//commonly used
var person = new Object();



//Computed Member Access Operator

//You can create properties dynamically using bracket notation. This will store
//the value at the specified memory address for the 'person' object
person[`firstname`] = `Tony`;
person[`lastname`] = `Alicea`;

var firstNameProperty = `firstname`;
console.log(`person: ${person}`);
console.log(`person[firstNameProperty: ${person[firstNameProperty]}`);



//Dot Operator (Member Access)

//The dot operator is used to access properties directly. The syntax parser 
//interprets the value following the dot as a string (key) to look up on the 
//object
console.log(`person.firstname: ${person.firstname}`);
console.log(`person.lastname: ${person.lastname}`);



//Objects within Objects

//You can create nested objects by assigning an object as a property of another
//object
person.address = new Object();
person.address.street = `111 Main St.`;
person.address.city = `New York`;
person.address.state = `NY`;


//Accessing nested properties using dot notation or bracket notation
console.log(`person.address.city: ${person.address.city}`);
console.log(`person['address']['city']: ${person['address']['city']}`);



//Member access associativity of computed access ([]) and the dot operator (.)
//is left-to-right. This meaning that expressions like person.address.city or
//person['address']['city'] are evaluated from left to right and interprated
//as below:

//  ((person['address'])['city'])
//  ((person.address).city)