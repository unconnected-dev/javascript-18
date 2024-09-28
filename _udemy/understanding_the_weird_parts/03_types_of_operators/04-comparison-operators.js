"use strict";



//Comparison Operators and Coercion in JavaScript

if(false){
    //This returns true because 1 < 2 is true and true < 3 is also true
    console.log(`1 < 2 < 3: ${1 < 2 < 3}`);
    //Output: true
}


if(false){
    //This also returns true, but not in the way you might expect
    //JavaScript evaluates 3 < 2 first, which is false
    //Then, false is coerced to 0, and 0 < 1 is true
    console.log(`3 < 2 < 1: ${3 < 2 < 1}`);
}


if(false){
    //JavaScript coerces boolean values into numbers during certain operations
    console.log(`Number(false): ${Number(false)}`);
    //Output: 0
    console.log(`Number("3"): ${Number("3")}`);
    //Output: 3
}


if(false){
    //`undefined` cannot be converted into a number, so it returns NaN 
    //(Not a Number) 
    console.log(`Number(undefined): ${Number(undefined)}`);
}


if(false){
    //`null` is converted to 0
    console.log(`Number(null): ${Number(null)}`);
}


//Coercion can sometimes lead to unexpected behavior and strange bugs. While 
//coercion can be useful, it can also make the code harder to understand and 
//maintain if misused

if(false){
    //Using loose equality (`==`) allows coercion during comparisons
    console.log(`3 == 3: ${3 == 3}`);
    //Output: true
}


if(false){
    //The string "3" is coerced to the number 3
    console.log(`"3" == 3: ${"3" == 3}`);
    //Output: true
}


if(false){
    //false is coerced to 0 during comparison
    console.log(`false == 0: ${false == 0}`);
    //Output: true
}


if(false){
    //Coercion rules can sometimes be counterintuitive. While `null` may be coerced
    //in some contexts, it doesn't behave like 0 when compared using `==`

    //null is not coerced to 0 during comparison
    console.log(`null == 0: ${null == 0}`);
    //Output: false
}


if(false){
    //An empty string is coerced to 0
    console.log(`"" == 0: ${"" == 0}`);
    //Output: true
}


if(false){
    //An empty string is also coerced to false
    console.log(`"" == false: ${"" == false}`);
    //Output: true
}



//Strict Equality and Inequality (=== and !==)

if(false){
    //`===` checks for both value and type equality, with no coercion
    console.log(`3 === 3: ${3 === 3}`);         //Output: true
    console.log(`"3" === "3": ${"3" === "3"}`); //Output: true
    console.log(`"3" === 3: ${"3" === 3}`);     //Output: false
}


if(false){
    var a = 0;
    var b = false;

    //`==` allows coercion, so this will print "they are equal"
    //because 0 is coerced to `false`
    if(a == b){
        console.log("== they are equal");
    } else {
        console.log("== they are not equal");
    }

    //`===` does not allow coercion, so this will print "they are not equal"
    if(a === b){
        console.log("=== they are equal");
    } else {
        console.log("=== they are not equal");
    }
}


//Always prefer using strict equality (`===`) unless you're intentionally
//relying on coercion. In most cases, strict equality (===) and strict 
//inequality (!==) prevent unexpected behavior

//Only use loose equality (`==`) and loose inequality (`!=`) when you 
//explicitly want to allow type coercion

//Be mindful of how JavaScript implicitly coerces values to different types
//in comparisons