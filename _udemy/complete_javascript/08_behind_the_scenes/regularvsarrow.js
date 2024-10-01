"use strict";


//Regular functions in JavaScript are defined using the `function` keyword
//They can be either function declarations or function expressions
//Regular functions have their own `this` context / value which is determined by how they are called

//Arrow functions were introduced in ES6
//They are defined using a `=>`
//Arrow functions do not have their own `this` context / value
//Instead they capture the `this` from the surrounding code (enclosing scope)
//They are useful to preserve the `this` value from the surrounding context
//Such as when defining methods in objects or when working with callbacks

//Context and value
//They are often used interchangeably in the context of the `this` keyword
//But can refer to slightly different aspects
//Context generally emphasizes the object or scope to which `this` is bound dynamically
//Value refers to the concrete value of `this` within a given execution context (every function)


//Regular vs arrow function examples
if(false){
    //Below is dangerous because if you use a var firstName the arrow
    //will access that
    //Uncomment var firstName and you get matilda


    // var firstName = `Matilda`;

    //This is a code block it is an object literal
    //Everything here is in the global scope
    const jonas = {
        firstName: "Jonas",
        year: 1991,
        calcAge: function(){
            console.log(this);
        },

        greet: () => console.log(`Hey ${this.firstName}`),  //this = undefined
                                                            // => arrow means surrounding parent
                                                            //which in this case is the global scope/window
                                                            //because object literal is not a code block

        wave: function(){                                   //this = jonas object
            console.log(`Wave ${this.firstName}`)
        }
    }  

    jonas.greet();                  //undefined
    console.log(this.firstName);    //undefined, when you try to access a property on an object
                                    //that doesn't exist, you get undefined
    jonas.wave();
}

if(false){
    const jonas = {
        firstName: "Jonas",
        year: 1991,
        calcAge: function(){
            console.log(this);
            const self = this;                                          //workaround for regular function call pre ES6
            
            //Functions below are all within calcAge()
            //They are not object functions

            //How regular functions work
            const isMillenial = function(){
                console.log(`isMillenial: ${this.year >= 1981 && this.year <= 1996}`);      //false
                console.log(`isMillenial: ${this.year}`);                                   //undefined
            }
            
            if(false)
                isMillenial();  //will give an error because this within isMillenial is
                                //undefined as it is a regular function call within calcAge
                                //even though it happens inside of a method
                                //it would be window if not strict
            

            //How regular functions worked with a workaround using self
            const isMillenialSelf = function(){
                console.log(`isMillenialSelf: ${self.year >= 1981 && self.year <= 1996}`);  //true
                console.log(`isMillenialSelf: ${self.year}`);                               //1991
            }
            isMillenialSelf();


            //Arrow functions are the solution
            //They get the parent scope which is calcAge() for isMillenial3()
            const isMillenial3 = () =>{
                console.log(`isMillenial3: ${this.year >= 1981 && this.year <= 1996}`);     //true
                console.log(`isMillenial3: ${this.year}`);                                  //1991
            }
            isMillenial3();
        },
    }

    jonas.calcAge();
}

if(false){
    //arguments keyword
    const addExpression = function(a ,b) {
        console.log(arguments);
        return a + b;
    }
    addExpression(2, 5);            //logs array with 2, 5
    addExpression(1,2,3);           //logs array with 1, 2, 3

    //arrow functions do not get arguments
    //arguments keyword only exists in regular functions or function declarations
    //arguments is not that important any more as there are more modern ways
    //of dealing with multiple parameters
    var addArrow = (a, b) =>{ 
        console.log(arguments);     
        return a + b;
    }
    addArrow(2, 5);                 //will not show log with 2, 5
}