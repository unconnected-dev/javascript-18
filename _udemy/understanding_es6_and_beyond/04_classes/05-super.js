"use strict";


//The `super` Keyword in JavaScript

//Super in Constructor:
// - The `super` keyword is used to call the constructor of the parent class
// - When a subclass uses `super()` in its constructor, it invokes the parent class's 
//   constructor, ensuring that the instance is properly initialized
// - In a subclass constructor, `super()` must be called before accessing `this`, or 
//   an error will occur



//This defines a new class named `Person`
class Person{
    //Public instance field
    firstName;

    //Constructor to initialize the instance
    constructor(name){
        this.firstName = name;
    }

    //Method accessible to all instances of `Person`
    greet(){
        return `Hello, ${this.firstName}`;
    }
}

//Extending a Class and Using `super`:
// - The `Tony` class extends `Person`, meaning it inherits the properties and methods
//   from `Person`
// - In `Tony`'s constructor, `super("James")` is called, which invokes the `Person`
//   constructor with `"James"` as the argument
class Tony extends Person{

    //Constructor of the subclass `Tony`
    constructor(){
        super("James");//Calls the `Person` constructor, setting `firstName` to "James"
    }

    //Overriding Methods:
    // - In JavaScript, when a subclass defines a method with the same name as a method
    //   in the parent class, it overrides the parent method
    // - The `greet` method in `Tony` overrides the `greet` method in `Person`
    greet(){

        //You can use `super.greet()` to call the overridden method in the parent class
        //Calls the `greet` method from `Person`
        let greeting = super.greet();   

        //Adds additional behavior to the parent method's output
        return `${greeting}, I'm Tony`; 
    }

    meet(){
        return "Nice to meet you";
    }
}

//Creating Instances and Using Methods:
let me = new Tony("Tony"); 
console.log(`${me.greet()}`);



//`super` Keyword Recap:
// - The `super` keyword is essential in subclasses to ensure proper initialization and to allow
//   subclasses to extend or customize parent class behavior
// - In the constructor, `super()` calls the parent class constructor
// - Inside methods, `super.methodName()` allows you to call the parent class's method, even if
//   it has been overridden in the subclass