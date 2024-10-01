'use strict';


//"this" depends on how/where a function is called NOT where it is defined

//this Keyword
//Special variable that is created for every execution context (every function)
//Takes the value of (points to the "owner" of the function in which the this Keyword is used)
//this is NOT static, it depends on how the function is called. It's value is only assigned 
//when the function is actually called

//Method:                   this = <Object called the method>
//Simple function call:     this = undefined, in strict mode || window if not in strict mode
//Arrow functions:          this = <this of surrounding function (lexical this)>
//Event listener:           this = <DOM element that the handler is attached to>


//this Examples
if(false){
    console.log(this);                      //Window object
}

if(false){
    const calcAge = function(year){
        console.log(2037 - year);
        console.log(this);                  //undefined due to strict mode, otherwise it would be window
    }
    calcAge(1985);
}

if(false){
    const calcAgeArrow = (year) =>{
        console.log(2037 - year);
        console.log(this);                  //window due to parent function/scope which is 
    }                                       //window in global scope
    calcAgeArrow(1985);
}

if(false){
    const jonas = {
        year: 1991,
        calcAge: function(){
            console.log(2037 - this.year);
            console.log(this);              //the object calling the method
        }
    }
    jonas.calcAge();                        //this = jonas


    const matilda = {
        year: 2017
    }
    matilda.calcAge = jonas.calcAge;        //method borrowing
    matilda.calcAge();                      //this = matilda


    //method borrowing, is passed by reference and not copied
    //if it is a copy, the result should be false because
    //two identical objects (including functions) are not equal
    //unless they are the exact same object
    //if it is a reference, then they should be equal
    console.log(jonas.calcAge === matilda.calcAge);

    const f = jonas.calcAge;
    // f();                                 //this = undefined due to strict mode (gives error)
                                            //otherwise it would be window            
    console.log(f);
}

//It doesn't matter if you nest a function inside another
//or use block scope
//this = undefined, otherwise it would be window
if(false){
    checkDepth();
    function checkDepth(){
        if(true){
            let callMe = function(){
                console.log(this);
            }
            callMe();
        }
    }
}