"use strict";


//Variable scope in JavaScript is defined lexically by a block, typically using 
//curly braces

//Lexical environments

//A new lexical environment is created with each block. In ES6, variables declared
// with `let` and `const` are block-scoped, meaning they are only accessible within 
//the block they are defined in

let a = 1, b = 1, c = 1;

if(a == b){

    //`var` is function-scoped or globally scoped, so `myVar` is accessible outside 
    //of this block as well
   var myVar = 1;

    //`let` is block-scoped, so `myLet` is only accessible within this block
    let myLet = 1;

    if(b == c){
        //`let` here defines `myOtherVar` within this inner block
        let myOtherVar = 1;

        //Accessible: `myVar` is function-scoped and thus accessible here
        //Accessible: `myLet` is block-scoped but we are still within its block
        console.log(`myVar: ${myVar}, myLet: ${myLet}, myOtherVar: ${myOtherVar}`);
    }


    //Not accessible: `myOtherVar` is block-scoped to the inner `if` block and cannot 
    //be accessed here. It would cause an error
    //console.log(myOtherVar);


    //Accessible: `myLet` is still accessible here since we are in the same block where
    //it was defined
    console.log(`myLet: ${myLet}`);
}


//Accessible: `myVar` is function-scoped and thus accessible outside the `if` block
console.log(`myVar: ${myVar}`);

//Not accessible: `myLet` is block-scoped and thus not accessible outside the `if`