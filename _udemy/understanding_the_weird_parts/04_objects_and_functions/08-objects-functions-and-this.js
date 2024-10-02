"use strict";



// When a function is invoked, a new execution context is created
// Each execution context consists of:
//  - A variable environment 
//  - A reference to the outer environment
//  - The `this` keyword, which refers to an object. The value of `this`
//    depends on how the function is called



// Global context: 
// In the global scope, `this` refers to the global object
// In strict mode, this will be `undefined`
console.log(`this: ${this}`);



// In a function, `this` behaves differently:
function a(){

    // In strict mode, `this` inside a function does not refer to the global
    // object, instead, it's `undefined` because strict mode prevents 
    // accidental reference to the global context
    console.log(`this: ${this}`);

    // Line below would throw an error because `this` is undefined in strict mode:
    // this.newVariable = `Hello`;
}
a();


var b = function(){
    
    // Similar to function `a`, in strict mode, `this` inside function `b` is 
    // `undefined`
    console.log(`this: ${this}`);
}
b();

// Accessing `this.newVariable` will return `undefined` since `this` in the 
// global scope refers to the global object (or `undefined` in strict mode)
console.log(`this.newVariable: ${this.newVariable}`); 



// When `this` is used inside an object method, it refers to the object itself
var c = {
    name: `The c object`,
    log: function(){

        // In this case, `this` refers to the object `c` because `log` is a 
        // method of `c`
        console.log(`this: ${this}`);
        // Outputs: "The c object"
        console.log(`this.name: ${this.name}`);


        // Problem with `this` inside inner functions:
        // `this` inside an inner function does not refer to the outer object
        // (`c`), but instead would be `undefined` in strict mode or point to
        // the global object in non-strict mode

        // var setName = function(newName) {
        //     this.name = newName; // `this` doesn't refer to `c` so will error
        // };
        // setName("Bob");
        

        // Workaround using a variable (`self`) to maintain the correct 
        // reference to `this` through the scope chain. It helps avoid the issue 
        // of thinking what `this` refers to

        // `self` is not a reference to `c`
        var self = this;
        var setname2 = function(name){
            // uses `self` to modify `c.name`
            self.name = name;
        }
        setname2(`bob`);

        console.log(`self.name: ${self.name}`);
    }
}

c.log();