"use strict";


//Private Fields, Getters, and Setters in JavaScript

//Private Fields:
// - In JavaScript, private fields are defined using a `#` prefix
// - These fields are accessible only within the class that defines them, not from
//   outside the class or through instances
// - This ensures encapsulation, a core principle of object-oriented programming,
//   by restricting direct access to the internal state of an object



//This defines a new class named `Person`
class Person{
    //Private fields
    #firstName;
    #lastName;

    //Constructor to initialize private fields
    constructor(firstname, lastname){
        this.#firstName = firstname;
        this.#lastName = lastname;
    }


    //Getters and Setters:
    // - Getters and setters provide controlled access to private fields
    // - Getters retrieve the value of a private field, while setters allow controlled
    //   modification of that field
    // - This is useful for validation, logging, or triggering additional actions when
    //   a field is accessed or modified

    // Getter for `#firstName`
    get fname(){
        return this.#firstName;
    }

    // Setter for `#firstName`
    set fname(fn){
        this.#firstName = fn;
    }


    //Private Methods:
    // - Like private fields, private methods are also prefixed with `#` and are 
    //   accessible only within the class
    // - Private methods are useful for internal logic that should not be exposed as
    //   part of the public API of the class

    // Private method
    #getPersonInfo(){
        return {
            //Example of internal data that might be used within the class
            id: 1
        }
    }

    
    //Public method that can access private fields and methods
    greet(){
        return `Hello, ${this.#firstName} ${this.#getPersonInfo().id}`;
    }
}

let me = new Person("Tony", "Alicea");

console.log(me.greet());//Outputs: "Hello, Tony 1"

// me.#firstName = "Anthony";//this causes an error



//Accessing Private Fields via Getters and Setters:
// - Direct access to private fields from outside the class (e.g., `me.#firstName`) is
//   not allowed and will cause an error
// - Instead, you can use getters and setters to access and modify private fields

me.fname = "Anthony";       //Uses the setter to change `#firstName` to "Anthony".
console.log(me.greet());    //Outputs: "Hello, Anthony 1"
console.log(me.fname);      //Uses the getter to retrieve the value of `#firstName`, outputs: "Anthony"



//Private Fields:
// - Private fields in JavaScript are declared with a # prefix and are only accessible
//   within the class they are defined in
// - These fields are not accessible from outside the class or from instances of the
//   class, making them truly private

//Getters and Setters:
// - Getters: Provide a way to access private fields indirectly. They are useful for
//   exposing a read-only view or adding logic when a property is accessed
// - Setters: Allow controlled modification of private fields. They can include validation
//   or other side effects when a field is updated
// - Getters and setters are defined using the get and set keywords, respectively

//Private Methods:
// - Private methods are similar to private fields in that they are accessible only within
//   the class
// - They can be used to encapsulate functionality that should not be exposed as part of the
//   class's public API

//Access Control:
// - Attempting to directly access or modify private fields (e.g., me.#firstName) from outside
//   the class will result in an error
// - Instead, use the provided getters and setters to interact with these fields in a controlled
//   manner

//Practical Use:
// - In the provided example, #firstName and #lastName are private fields, and the class exposes
//   fname as a public property via a getter and setter
// - The greet method can access these private fields and even use a private method to include
//   additional information when generating the greeting