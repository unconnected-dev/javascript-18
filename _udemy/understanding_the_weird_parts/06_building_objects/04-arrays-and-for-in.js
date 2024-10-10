"use strict";



// Arrays in JavaScript are objects, so they can be used like objects.
// The indices of an array are actually property names in name-value pairs.
// This is why bracket notation can be used to access array elements by index.

var arr = ["John", "Jane", "Jim"];

for (var prop in arr) {
    console.log(`${prop}: ${arr[prop]}`);
}



// Since arrays are objects, this means frameworks or libraries can add features
// to arrays, potentially leading to issues if those features interfere with
// array behavior.

Array.prototype.myCustomFeature = "cool";

// The for...in loop will iterate over both the array's indices and any added
// properties or methods in the prototype chain, like `myCustomFeature` here.

// Using for...in with arrays can cause issues, as it can iterate into the 
// prototype chain, leading to unexpected behavior when prototype properties
// are included in the iteration.

for (var prop in arr) {
    console.log(`${prop}: ${arr[prop]}`);
}



// This is why you should avoid using for...in for arrays. Instead, use a 
// traditional for loop or modern methods like forEach, which iterate over the
// actual array elements and avoid prototype properties.

for (var i = 0; i < arr.length; i++) {
    console.log(`${i}: ${arr[i]}`);
}