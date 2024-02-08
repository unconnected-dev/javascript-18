"use strict";


//Primatives                    Objects
//Primative types               Reference Types
//Number                        Object literal
//String                        Arrays
//Boolean                       Functions
//Undefined                     Many more...
//Null
//Symbol
//Bigint

//Primative types are stored in the Call Stack
//Specifically in the execution contexts in which they are declared
//Reference types are stored in the Heap



//Call Stack
//Identifier            Address         Value
//age                   0001            30
//oldAge                0001


//Identifier            Address         Value
//oldAge                0001            30
//age                   0002            31

//Identifier points to the address
//Values at a certain address are immutable, unable to be changed
//When age is changed as a value, a new address/memory is created
//age then points to the new address



//Reference types are different
//The call stack will create a new address/memory
//the value of which contains an address which
//points to the Heap

//The object is stored in the Heap as
//object may be too large to be stored in the Call Stack

//Call Stack                            
//Identifier            Address         Value
//me                    0003            D30F
//friend                0003            D30F

//Heap
//Address               Value
//D30F                  {name: 'Jonas', age: 30}

//When friend.age is changed, it changes the object in the Heap
//which is also what `me` points to


if(false){
    //Primative types are copied
    //If you update age, oldAge will not be affected
    let age     = 30;
    let oldAge  = age;
    age         = 31;
    console.log(`age: ${age}, oldAge: ${oldAge}`);


    //Reference types are not copied
    //`friend` will point to the same address as `me`
    //when friend.age is changed on the heap
    //`me` which is pointing to the same address will be affected 
    const me = {
        name: 'Jonas',
        age: 30
    }

    const friend = me;
    friend.age   = 20;
    console.log(`me: ${me.age},  friend: ${friend.age}`);
}

//Another primative example
if(false){
    let lastName    = 'Williams';
    let oldLastName = lastName;
    lastName        = 'Davis';
    console.log(`lastName: ${lastName}, oldLastName: ${oldLastName}`);
}

//Another reference example
if(false){
    const jessica = {
        firstName: 'Jessica',
        lastName: 'Williams',
        age: 27
    }

    //jessica and marriedJessica hold the same memory address value
    //You can change values on the Heap, regardless of const
    //as const only refers to the value, which is an address to the Heap
    const marriedJessica    = jessica;
    marriedJessica.lastName = 'Davis';
    console.log(`jessica: ${jessica.lastName}, marriedJessica: ${marriedJessica.lastName}`);

    //This will not work as marriedJessica is const, so you cannot change the memory address
    // marriedJessica = {};
}

//Copying objects
if(false){
    const jessica2 = {
        firstName: 'Jessica',
        lastName: 'Williams',
        age: 27,
        family: ['Alice', 'Bob']
    }

    //This will create a shallow copy of the object
    //It only works on the first level
    //If an object holds an object, the inner object will be the same
    //and point to the same address on the Heap
    //A deep clone would copy everything
    const jessicaCopy = Object.assign({}, jessica2);
    jessicaCopy.lastName = 'Davis';
    console.log(`jessica2: ${jessica2.lastName}, jessicaCopy: ${jessicaCopy.lastName}`);

    //This shows the shallow copy meaning, because an array is an object inside the object
    jessicaCopy.family.push('Mary');
    jessicaCopy.family.push('Bob');
    console.log(`jessica2: ${jessica2.family}, jessicaCopy: ${jessicaCopy.family}`);
}

//Structured Clone
if(false){
    //Apparently in recent JavaScript there is a new solution to the deep clone
    //But it has limitations for other data types like the following:

    //Circular reference
    //If the object being cloned references itself directly or indirectly

    //Functions and symbols
    //If the object contains properties that are functions or symbols, they will
    //not be cloned

    //Non-cloneable objects
    //Certain built-in objects, such as Map, Set, WeakMap, WeakSet, Blob, FileList, 
    //ImageData, ArrayBuffer, and others

    //External references
    //Objects that reference external resources (such as DOM elements)

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