"use strict";

//Types
if(false){
    // A variable does not hold the data type, the value does
    let aString = "A test string";
    let aNumber = 0;
    let aBoolean = true;

    console.log(typeof aString);
    console.log(typeof aNumber);
    console.log(typeof aBoolean);

    //This is what is meant by dynamic typing, variables are assigned a type at runtime
    //based on the variable's value at the time
    aNumber = "dynamic typing";
    console.log(typeof aNumber);
}


//Types ext
if(false){
    //undefined is both the type and value
    //which makes it unique in the primitive data types
    let undefinedVariable;
    console.log(undefinedVariable);
    console.log(typeof undefinedVariable);

    //null type is stated to be object
    //but it is a bug that has not been corrected for legacy reasons
    //it should return null like undefined returns undefined
    console.log(typeof null);

    //NaN not a number, is the type number
    //It is still a number but an invalid one
    console.log(typeof NaN);
}


//Operators
if(false){
    //I forgot a bit about the power to operator **
    //5*5*5*5*5
    console.log(5**5);

    //Math operators
    // - + * / **

    //Assignment operators
    let x = 0;
    x++;
    x--;
    x+=10;//10
    x-=5;//5
    x*=10;//50
    x/=5;//10
    x**=2;//100

    //Comparision operators
    // >, <, >=, <=
}


//Template literal / template strings
if(false){
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    let myName = "Paul";
    let aStringLiteral = `I'm, ${myName}`;
    console.log(aStringLiteral);

    console.log(`A multi
    line
    string`)
}


if(false){
    //Interesting point on the console log
    //Logging multiple types in the same log will display as different colors
    //Logging just the string will display as white (dark mode)
    console.log(1, "1");
    console.log("1");
}


//Conversion / coercion
if(false){
    //Type conversion vs coercion
    //Conversion is explicit by the programmer, coercion is implicit through JavaScript

    //Conversion examples
    const aYear = '1985';
    console.log(Number(aYear), aYear);
    console.log(aYear + 10);            //Concatenate a string (coercion)
    console.log(Number(aYear) + 10);

    console.log(String("1"), 1);


    //Coercion example to string
    console.log("I am " + 37 + " years old.");

    //Not all operators have type coercion to string 
    console.log("23" - "5" - 1);        //number
    console.log("2" * "2");             //number
    console.log("10" / "5");            //number

    let aVariable = "1" + 1;            //"11";//string
    aVariable--;
    console.log(typeof aVariable);
}


//Truthy and Falsy values
if(false){
    //These are not false but would convert to a boolean
    //5 falsy values: 0, "", undefined, null, NaN
    //Anything else would be truthy
    console.log(Boolean(0), Boolean(""), Boolean(undefined), Boolean(null), Boolean(NaN));
    console.log(Boolean(1), Boolean("abc"), Boolean({}));

    //In practice the conversion is implicit not explicit, it is always type coercion
    //What we do in if statements
    const money = 0;
    if(money)   console.log("you have money");
    else        console.log("you don't have money");


    //In the example below, height is not defined
    //if you use the following in the if statement you get "this"
    // if(typeof height)
    // if(typeof height === "undefined")     //this is because a string besides "" is truethy
    //only height alone would trigger "that"

    // let height;
    // if(height)  console.log("this");
    // else         console.log("that");
}


//Equaility operators
if(false){
    //=== strict equality operator, does not do type coercion
    //== loose equality operator does type coercion
    //avoid the loose equality operator because it is weird
    //better to convert manually
    console.log(18 === 18);       //true
    console.log(18 === "18");     //false
    console.log(18 === 19);       //false
    console.log(18 == 18);        //true
    console.log(18 == "18");      //true
    console.log(18 == 19);        //false

    // Also see: 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality
}


//Switch statement hierarchy
if(false){
    const aNum = 0;
    console.log("switch test");
    switch(aNum){
        case 0: 
            console.log("0");
            // break;
        case 1: 
            console.log("1");
            break;
            
        case 2: 
            console.log("2");
            break;

        case 3: 
            console.log("3");
            break;
    }
}