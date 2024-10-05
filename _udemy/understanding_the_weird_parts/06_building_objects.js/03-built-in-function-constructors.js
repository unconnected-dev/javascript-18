"use strict";



// Function Constructors and Prototypes in Base JavaScript

// JavaScript provides built-in function constructors for creating objects.
// These constructors look like they are creating primitives, but they actually
// create objects that wrap primitives with additional methods.


if (false){
    var a = new Number("3");
    // `a` is not a primitive number; it is an object with a prototype.
    console.log(`a: ${a}`);
    console.log(`a.toFixed(): ${a.toFixed(2)}`);
}

if(false){
    var b = new String("John");
    // `b` is a string object, not a primitive string.
    console.log(`b: ${b}`);
    
    // Demonstrating string object methods
    // This would return -1 if used, as prototype is incorrect.
    // console.log(b.prototype.indexOf("o"));
    
    // This works, and returns 1, since `indexOf` is a method of the string object.
    console.log(b.indexOf("o"));
}



// JavaScript will sometimes "box" a primitive into its object counterpart.
// This happens automatically when calling methods on a primitive.
if(false){
    console.log(`"John".length: ${"John".length}`);

    var c = new Date("3/1/2015");
    console.log(`c: ${c}`);
}



// These built-in objects (String, Number, Date, etc.) can be extended if
// needed, especially for libraries or frameworks that add extra functionality.
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

if(false){
    // JavaScript automatically converts the primitive string into a String object.
    console.log(`'John'.isLengthGreaterThan(5): ${'John'.isLengthGreaterThan(5)}`);
}


Number.prototype.isPositive = function() {
    return this > 0;
}

if (false) {
    // This would error out because JavaScript does not automatically convert 
    // a number primitive to a Number object.
    // console.log(`isPositive: ${3.isPositive()}`);

    // Instead, you would need to create a Number object explicitly.
    var d = new Number(3);
    console.log(`d.isPositive(): ${d.isPositive()}`);
}



// Primitives vs Objects
// The distinction between primitives and their object wrappers can be confusing.
// Objects created with constructors like `new Number()` use more memory than 
// plain primitives. In general, it's best to avoid using them unless needed.

if(false){
    var e = 3; 
    var f = new Number(3); 

    // The `==` operator coerces types before comparing.
    console.log(`e == f: ${e == f}`); 


    // With `===`, which doesn't coerce types, the comparison is false because
    // `e` is a primitive and `f` is an object.
    console.log(`e === f: ${e === f}`); 
}


// Unexpected results can happen during comparisons because of type coercion.
// It's better to use primitive values directly instead of using objects 
// created with constructors like `new Number()`.


// Conversion without creating an object
// Here, we just return the number 2 as a primitive, not as an object.
if(false){
    var g = Number("2");
    console.log(`g: ${g}`);
}


// Syntactic Sugar
// JavaScript now has `class` and `extends`, but these are just syntactic sugar 
// over the existing prototype inheritance system in JavaScript. They don't 
// change how JavaScript works under the hood.