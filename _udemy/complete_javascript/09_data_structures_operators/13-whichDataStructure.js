`use strict`;


//In JavaScript `WeakMap` and `WeakSet` were introduced in ES6
//They are similar to Map and Set

//WeakMap
//A WeakMap is a collection of key-pair values where the keys must be objects
//and the values can be arbitrary values
//Unlike a Map the keys in a WeakMap are held weakly. This means if there are no 
//other references to a key, it may be garbage collected.
//This makes WeakMap useful for scenarios where you want to associate additional
//data with objects without preventing those objects from being garbage collected
//when they are no longer needed
//One common use case of a WeakMap is to store private data associated with objects

//WeakSet
//A WeakSet is a collection of objects where each object can only occur once
//within the set
//Similar to a WeakMap, objects in a WeakSet are held weakly meaning if there
//are no other references to an object in the set, it may be garbage collected.
//WeakSet is useful for scenarios where you want to keep track of a set of objects
//without preventing them from being garbage colleced when they're no longer needed



//Array
//Use when you need ordered list of values that may contain duplicates
//When you need to manipulate data
let taskArray = ['code', 'eat', 'code'];


//Set
//When you need to work with unique values
//When high-performance is really important
//To remove duplicates from an array
let taskSet = new Set(['code', 'eat', 'code']);


//Object
//Traditional key/value from before ES6
//Easier to write and access values with . and []
let taskObject = {
    task: 'code',
    date: 'today',
    repeat: true
}


//Map
//Better performance
//Keys can have any data type
//Easy to iterate
//Easy to computer size
let taskMap = new Map([
    ['task', 'code'],
    ['date', 'today'],
    [false, 'start coding']
]);