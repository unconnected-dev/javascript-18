"use strict";


// Primitive Types vs Reference Types

// Primatives               Objects
// - Primative types        - Reference Types
// - Number                 - Object literal
// - String                 - Arrays
// - Boolean                - Functions
// - Undefined              - Many more...
// - Null
// - Symbol
// - Bigint

// Primitive types are stored in the Call Stack (inside execution contexts).
// Reference types are stored in the Heap.



// Call Stack Example:
// Variable             Address         Value
// age                  0001            30
// oldAge               0001            30


// Variable             Address         Value
// oldAge               0001            30
// age                  0002            31

// Values at each memory address are immutable. Changing `age` creates a new
// memory address and updates the pointer.



// Reference Types Example:       
// Identifier           Address         Value
// me                   0003            D30F
// friend               0003            D30F

// Heap
// Address              Value
// D30F                 {name: 'Jonas', age: 30}


// Reference types store an address pointing to the Heap, where the actual
// object data is stored, allowing multiple variables to point to the same
// object in memory.

// Changing `friend.age` modifies the object in the Heap, affecting both
// `me` and `friend` since they point to the same object.


if(false){
    // Primitive types are copied, not referenced.
    let age     = 30;
    let oldAge  = age;
    age         = 31;
    console.log(`age: ${age}, oldAge: ${oldAge}`);


    // Reference types are not copied, but referenced.
    // Both `me` and `friend` point to the same object in memory. When 
    // friend.age is changed on the heap `me` which is pointing to the same
    // address will be affected.
    const me = {
        name: 'Jonas',
        age: 30
    }

    const friend = me;
    friend.age   = 20;
    console.log(`me: ${me.age},  friend: ${friend.age}`);
}

// Another primative example
if(false){
    let lastName    = 'Williams';
    let oldLastName = lastName;
    lastName        = 'Davis';
    console.log(`lastName: ${lastName}, oldLastName: ${oldLastName}`);
}

// Another reference example
if(false){
    const jessica = {
        firstName: 'Jessica',
        lastName: 'Williams',
        age: 27
    }

    // jessica and marriedJessica hold the same memory address value.
    // You can change values on the Heap, regardless of const as const only
    // refers to the value, which is an address to the Heap.
    const marriedJessica    = jessica;
    marriedJessica.lastName = 'Davis';
    console.log(`jessica: ${jessica.lastName}, marriedJessica: ${marriedJessica.lastName}`);

    // Reassigning a `const` reference type will result in an error.
    // marriedJessica = {};
}


// Copying objects
if(false){
    const jessica2 = {
        firstName: 'Jessica',
        lastName: 'Williams',
        age: 27,
        family: ['Alice', 'Bob']
    }

    // Object.assign() creates a shallow copy (only top-level properties).
    // It only works on the first level. If an object holds an object, the 
    // inner object will be the same and point to the same address on the Heap.
    // A deep clone would copy everything.
    const jessicaCopy = Object.assign({}, jessica2);
    jessicaCopy.lastName = 'Davis';
    console.log(`jessica2: ${jessica2.lastName}, jessicaCopy: ${jessicaCopy.lastName}`);

    // Shallow copy means nested objects (like arrays) are still referenced.
    // This shows the shallow copy meaning, because an array is an object inside the object
    jessicaCopy.family.push('Mary');
    jessicaCopy.family.push('Bob');
    console.log(`jessica2: ${jessica2.family}, jessicaCopy: ${jessicaCopy.family}`);
}


// Structured Clone
if(false){
    // New deep cloning method: `structuredClone()`.
    // However, it has limitations:

    // Circular reference
    // If the object being cloned references itself directly or indirectly.

    // Functions and symbols
    // If the object contains properties that are functions or symbols, they
    // will not be cloned.

    // Non-cloneable objects
    // Certain built-in objects, such as Map, Set, WeakMap, WeakSet, Blob,
    // FileList, ImageData, ArrayBuffer, and others.

    // External references
    // Objects that reference external resources (such as DOM elements).

    const jessica3 = {
        firstName: 'Jessica',
        lastName: 'Williams',
        age: 27,
        family: ['Alice', 'Bob']
    }

    const evilJessica = structuredClone(jessica3);
    evilJessica.lastName = 'Evil';
    evilJessica.family.push('Brian');
    console.log(`jessica3: ${jessica3.family}, evilJessica: ${evilJessica.family}`);
}