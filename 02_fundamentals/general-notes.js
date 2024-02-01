//use strict will bring up some error checking in console
"use strict";


//Functions
if(false){
    //Functions are just values, they are not a type
    //The main difference is function declarations can be called before being defined in the code
    //This happens because of a process called hoisting
    //See below


    //Function declaration
    console.log(calcAgeOne(1981));//Was called first
    function calcAgeOne(birthYear){
        return 2037 - birthYear;
    }
    console.log(calcAgeOne);

    //Anonymous function, is a function without a name
    //Function expression (expressions produce values)
    // console.log(calcAgeTwo(1985));//This bugs out
    const calcAgeTwo = function(birthYear){
        return 2037 - birthYear;
    }
    console.log(calcAgeTwo(1983));

    //Note:
    //calcAgeTwo is a variable that stores a function. calcAgeTwo() is a function call
    console.log(`nocall: ${calcAgeTwo}`); //logs function code to the console
    console.log(`call: ${calcAgeTwo()}`); //invokes a function and logs its result (return value) to the console


    //Arrow functions
    //Arrow functions do not get a this keyword
    //The value is returned implicitly
    const calcAgeThree = birthYear => 2037 - birthYear;
    console.log(calcAgeThree(1982));
}


//Passing parameters
if(false){
    //Single parameter
    const yearsUntilRetirement1 = birthYear =>{
        const age = 2037 - birthYear;
        const retirement = 65 - age;
        return retirement;//need to put down explicitly if multiple lines
    }
    console.log(yearsUntilRetirement1(1982));

    //Multiple parameter
    const yearsUntilRetirement2 = (birthYear, firstName) => {
            const age = 2037 - birthYear;
            const retirement = 65 - age;
            return `${firstName} is ${age} years old and retires in ${retirement} years`;
    }
    console.log(yearsUntilRetirement2(1982, "Dan"));
}


//Dot vs bracket notation
if(false){
    //Dot cannot use variables like bracket can
    //Both have high priority
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table
    const danObject = {
        firstName: "Dan",
        lastName: "Smith",
        age: 37,
        friends: ["Frank","Bob","Bill"],
        aFunction: function(currentYear){
            return currentYear - this.age;
        },
        getSummary: function(){
            return `${this.firstName} is ${this.age} years old`;
        }
    }

    console.log(danObject.aFunction(2023));
    console.log(danObject["aFunction"](2023));
    console.log(danObject.getSummary());

    let nameKey = "Name";

    console.log(danObject);
    console.log(danObject.firstName);
    console.log(danObject[`first${nameKey}`]);
    console.log(`${danObject.firstName} has ${danObject.friends.length} friends, and his best friend is ${danObject.friends[0]}`);

    //Insert new property into object
    danObject.newProperty = 1;
    danObject["anotherProperty"] = 2;
    console.log(danObject);
}


//Continue
if(false){
    let danArray = [
        "Dan",
        "Smith",
        37
    ];

    //continue, skips over the iteration of the loop
    for(let i = 0; i < danArray.length; i++){
        if(typeof danArray[i] === "string")
            continue;

        console.log("printing : " + danArray[i]);
    }
}