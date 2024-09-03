"use strict";



//Protocols:
//A protocol defines a set of rules or conventions for how to exchange
//information

//Iteration Protocols:
//The iteration protocol defines the specific set of rules that objects
//must follow to be iterable, meaning they can be iterated over using
//constructs like `for...of` loops

//"Iterate Over":
//To "iterate over" means to move from value to value within a set or 
//list of values

//Iterable:
//An object is considered iterable if it implements the `[Symbol.iterator]`
//method
//This method must return an iterator, which is an object that adheres to 
//the iterator protocol


//Example of Creating an Iterable Object:
//The `numbers` object can become iterable if it has a method that returns
//an iterator which conforms to the iteration protocol
let numbers = {

    getIterator: function(start, end){
        let nextValue = start;
        return {
            
            //The `next` method is part of the iterator protocol
            //It returns an object with two properties: 
            // -`value` (the current value)
            // - `done` (a boolean indicating whether the iteration is complete)
            next: () => {
                if(nextValue < end){
                    let nextObj = { value: nextValue, done: false };
                    nextValue++;
                    return nextObj;
                }
                return { value: nextValue, done: true };
            }
        }
    }
}

let iterator = numbers.getIterator(2, 5);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



//Using the `[Symbol.iterator]` method to make an object iterable:
let numbers2 = {

    type: "Integers",
    decimal: false,

    //The `[Symbol.iterator]` method makes the `numbers2` object iterable
    [Symbol.iterator]: function(){
        const start = 0;
        const end = 5;
        let nextValue = start;
        return {

            //The iterator must have a `next` method that returns an object 
            //with `value` and `done` properties
            next: () => {
                if(nextValue <= end){
                    let nextObj = { value: nextValue, done: false };
                    nextValue++;
                    return nextObj;
                }
                return { value: nextValue, done: true };
            }
        }
    }
}


if(false){
    //This `for...of` loop works because `numbers2` is iterable
    for(const num of numbers2){
        console.log(`${num}`);
    }
}


if(false){
    //Properties defined using a Symbol (like `[Symbol.iterator]`) are not
    //enumerable, meaning they are not included when iterating over properties
    //with `for...in`
    //The loop below will only log the enumerable properties of `numbers2`
    for(const prop in numbers2){
        console.log(`${prop}`);
    }
}


if(false){
    //This manually iterates over `numbers2` using its iterator
    let iterator2 = numbers[Symbol.iterator]();
    let next = iterator2.next();

    while(!next.done){
        console.log(next.value);
        next = iterator2.next();
    }
}


//Protocols:
// - Define rules for information exchange

//Iteration Protocols:
// - Allow objects to be iterable, typically using for...of loops

//Iterables:
// - Objects that implement the [Symbol.iterator] method and return an iterator

//Iterators:
// - Objects with a next() method that returns an object containing value and done

//Symbol Properties:
// - Properties like [Symbol.iterator] are not enumerable and won’t appear in for...in loops