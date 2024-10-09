"use strict";


// `const` vs `let`: Differences and Similarities

// Block Scoping
// `const` works the same way as `let` in terms of scoping. Both are 
// block-scoped, meaning they are only accessible within the block 
// they are defined in.
const firstName = "Tony";
{
    const firstName = "Anthony";

    // This will log "Anthony" because `firstName` here refers to the 
    // block-scoped variable.
    console.log(`${firstName}`);
}

// This will log "Tony" as it refers to the `firstName` declared in the 
// outer scope.
console.log(`${firstName}`);


// Immutability of Binding:
// - The key difference between `let` and `const` is that `const` creates 
//   a constant binding.
// - This means that the variable's reference (or binding) to its value 
//   cannot be changed after initialization.
// - However, this does not mean that the value itself is immutable.

const secondName = "Brad";
// Attempting to reassign `secondName` would cause an error because `const` 
// does not allow reassignment of the binding.
// Uncommenting the following line would result in TypeError: Assignment 
// to constant variable.
// secondName = "John";


// Mutability of Values:
// - While the binding (the reference / pointer to the value) of a `const` 
//   variable is immutable, the value itself can still be mutable if it's 
//   an object or an array.

// Example with an object:
const me = { firstName: "Tony", lastName: "Alicea" };

// You can modify the properties of the object because the object itself 
// is mutable.
me.firstName = "Brad";

// This will log "Brad Alicea"
console.log(`${me.firstName} ${me.lastName}`);

// However, you cannot reassign the `me` variable to a new object.
// Uncommenting the following line would cause a TypeError: Assignment to 
// constant variable.
// me = { firstName: "John", lastName: "Doe" };



// Block Scoping: 
// const behaves the same as let regarding block scoping, restricting 
// access to the block in which it's defined.

// Immutable Binding: 
// The primary difference between const and let is that const ensures 
// the variable binding is immutable, meaning the reference to the value 
// cannot be changed once set.

// Mutable Values: 
// If a const variable points to an object or array, the contents of that 
// object or array can still be modified. The immutability applies only 
// to the variable's binding, not the value it holds.