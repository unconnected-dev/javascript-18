"use strict";



// Avoiding Global Variable Overwrites in Libraries

// In a situation where multiple libraries or scripts define the same global 
// variable (e.g., `libraryName`), we risk overwriting the value defined by
// another library or script. This is particularly common when integrating 
// multiple third-party libraries.


// The following could overwrite lib1.js:
// var libraryName = "Lib 2";


// A safer way to prevent overwriting the global variable is by checking 
// if the variable is already defined in the global scope. If `libraryName`
// is already set by another script (like lib1.js), we don't overwrite it.
// Otherwise, we set it to a default value, e.g., "Lib 2".
window.libraryName = window.libraryName || "Lib 2";


// `window.libraryName`: Refers to the global `libraryName` variable and
// checks if `window.libraryName` is already defined (truthy). If it is, it 
// keeps the existing value. If not, it assigns the value "Lib 2".

// This approach ensures that if `libraryName` is already defined, the value 
// is retained and not overwritten. If `libraryName` is undefined or falsy, 
// it assigns the value "Lib 2".


// This technique is often used when setting up a library or framework. Instead 
// of directly assigning values to global variables, the library checks if they 
// are already defined. This pattern makes it easier to integrate multiple 
// libraries without causing conflicts.

// If a developer accidentally uses the same variable name in their own code 
// (or in another library), this method helps prevent the accidental 
// overwriting of a library’s global variable.

// It also makes debugging easier because the original variable won't be 
// unexpectedly replaced by a new value.

// However, if there's a name collision (e.g., two libraries defining 
// `libraryName`), it could still cause logic issues or errors. Developers 
// should be aware of the libraries they are using and avoid name collisions.