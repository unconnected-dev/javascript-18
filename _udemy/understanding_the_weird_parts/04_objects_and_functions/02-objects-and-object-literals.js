"use strict";



// Object Literal {}
// This is not an operator. When JavaScript encounters curly braces without a 
// function, if, or while statement, it assumes you're creating an object. It
// is the preferred method for creating objects.
var person = {
    firstname: `Tony`,
    lastname: `Alicea`,
    address: {
        street: `111 Main St`,
        city: `New York`
    }
};
console.log(`person: ${person}`);


// You can pass objects directly to functions. This allows flexible and dynamic
// handling of data. Objects can also be created directly in the function 
// argument using object literals.
function greet(person){
    console.log(`Hi ${person.firstname} ${person.lastname}`);
}

// Passing an existing object
greet(person);

// Creating an object inline
greet({firstname: `Mary`, lastname: `Doe`});


// Dynamic Object Property Assignment
// You can add properties dynamically to objects even after they are created.
person.address2 = {
    street: `333 Second St.`
};