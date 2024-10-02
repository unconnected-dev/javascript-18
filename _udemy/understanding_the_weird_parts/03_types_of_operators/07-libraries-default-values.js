"use strict";



// Overwriting Variables Across Multiple JavaScript Files

// In an HTML file, when multiple JavaScript files are included, they are executed
// one after the other. Think of it as if all the scripts are combined into a 
// single large file and executed sequentially. Each JavaScript file shares the 
// global execution context (i.e., the same global scope).

// If two libraries or files define a variable with the same name in the global 
// scope, the value of that variable will be overwritten by the last file that 
// defines it.


// Example:
// If both `lib1.js` and `lib2.js` define the same global variable `libraryName`, 
// the value of `libraryName` will be overwritten by whichever file is loaded last 
// in the HTML document.

console.log(`libraryName: ${libraryName}`);
// Output: "Lib 2" (Assuming the value from lib2.js overwrites lib1.js)