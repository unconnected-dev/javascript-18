"use strict";



// Enumerable
// - A property is considered enumerable if it appears during a loop over the
//   properties of an object (e.g., using for...in).
// - By default, properties created via object literals or using the 
//   `Object.defineProperty` method with the `enumerable` flag set to true will 
//   be enumerable.

let names = ["Tony", "Anthony", "Alicea"];


// for...of Loop
// Used to iterate over the values of an iterable object, such as 
// arrays, strings, maps, sets, etc.
// Typically used when you need to access the values of an array 
// or other iterable object.
for(const name of names){
    console.log(`name: ${name}`);// Outputs each value in the array
}

// for...in Loop
// Used to iterate over the enumerable properties (keys) of an object.
// Typically used to iterate over the keys of an object or indices
// of an array.
for(const name in names){
    console.log(name);// Outputs each index in the array
}

// - The for...in loop iterates over all enumerable properties of an object,
//   including those inherited from the prototype chain.
// - This loop returns keys as strings, even for arrays where the keys are
//   numeric indices.
// - It is not suitable for arrays when the order of iteration is important,
//   as the order is not guaranteed.



class Animal{
    name = "dog";
}

class Dog extends Animal{
    sound = "bark";

    makeSound(){
        console.log(this.sound);
    }
}


// Using for...in with a Class Instance
let dog = new Dog();
for(const prop in dog){
    console.log(prop);// Outputs the keys 'name' and 'sound'
}

// - The for...in loop will iterate over both the instance properties 
//   (like 'sound') and any properties inherited from the prototype 
//   (like 'name' from Animal).
// - This means you might see properties from parent classes or from the 
//   object's prototype chain, not just those directly defined on the 
//   instance.



let dog2 = {
    sound: "bark",
    makeSound: function(){
        console.log("bark");
    }
}

// Prototype Chain
// - The for...in loop not only iterates over an object's own enumerable
//   properties  but also over those properties down its prototype chain.
// - This can result in unexpected properties being iterated over if the 
//   object's prototype has enumerable properties.
// - Iterating over the prototype chain can lead to unexpected behavior 
//   if not handled carefully, as it may include properties you do not intend
//   to access.

dog2.__proto__ = {
    residence: "Earth"
}

for(const prop in dog2){
    console.log(dog2);// Outputs 'sound', 'makeSound', and 'residence'
}


// Checking if a Property is Enumerable
// - The `propertyIsEnumerable()` method can be used to check if a specific 
//   property is enumerable on an object.
console.log(dog.propertyIsEnumerable("sound")); //Outputs: true



// Error Case for for...of
// - Non-iterable objects (like regular objects) will cause an error if used 
//   with for...of.
// - Attempting to use a for...of loop with a non-iterable object will throw 
//   a `TypeError`.
try {
    for(const prop of dog){
        console.log(prop); 
    }
} catch(e) {
    console.log(e.message); // Outputs: dog is not iterable
}
// - Ensure that the object you use with for...of is iterable 
//   (e.g., arrays, strings, maps).
// - If you need to iterate over properties of a non-iterable object, consider
//   using for...in instead.



// for...of:
// - Iterates over values of an iterable (e.g., array, string).
// - Suitable for iterating arrays, strings, and other iterable objects.
// - Does not work with non-iterable objects (throws an error).

// for...in:
// - Iterates over enumerable properties (keys) of an object.
// - Suitable for iterating over the properties of objects and the indices of 
//   arrays.
// - Iterates over properties in the object's prototype chain as well.