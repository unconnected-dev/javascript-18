"use strict";



// Introduction to Functional Programming
// Functional programming is a programming paradigm that treats computation 
// as the evaluation of mathematical functions and avoids changing state 
// or mutable data. Here, we will compare traditional approaches with 
// functional programming.


// Example of a Non-Functional Programming Approach
if (false) {
    var arr1 = [1, 2, 3];
    console.log(`arr1: ${arr1}`);

    // Using a for loop to create a new array by doubling the values of 
    // arr1
    var arr2 = [];
    for (var i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i] * 2);
    }

    console.log(`arr2: ${arr2}`);
}


// Functional Programming Example
// The mapForEach function applies a given function to each element in 
// an array and returns a new array
function mapForEach(arr, fn) {
    var newArr = []; 
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i]) 
        );
    }
    return newArr;
}


// Example usage of mapForEach
// Doubling each element in the array
if (false){
    var arr1 = [1, 2, 3];
    var arr2 = mapForEach(arr1, function(item) { return item * 2; });
    console.log(`arr2: ${arr2}`); 
}


// Filter example: return an array of boolean values indicating if 
// items are greater than 2
if(false){
    var arr3 = mapForEach(arr1, function(item) { return item > 2; });
    console.log(`arr3: ${arr3}`); 
}


// Function to check if an item exceeds a certain limit
var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

// Using .bind to preset the limiter parameter for the checkPastLimit 
// function to 1
if(false){
    var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
    console.log(`arr4: ${arr4}`); 
}


// Simplified version of checkPastLimit using closures
var checkPastLimitSimplified = function(limiter) {
    return function(item) {
        return item > limiter;
    };
}

// Using the simplified checkPastLimit with mapForEach
if(false){
    var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
    console.log(`arr5: ${arr5}`); 
}


// Libraries for Functional Programming
// If you're interested in exploring functional programming further, 
// consider checking out the following libraries:
// - underscore.js
// - lodash
// Note: Many functionalities provided by these libraries have been 
// incorporated into ES6 and beyond, making them less necessary for some 
// tasks.