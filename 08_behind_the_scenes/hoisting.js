"strict mode";


//Hoisting makes some types of variables accessible/usable in the code before they
//are actually declared "variables are lifted to the top of their scope"
//Before execution code is scanned for variable declarations. For each new variable
//a new property is created in the Variable Enviroment Object

//This was due to wanting to allow functions to be accessible before being actually declared
//Hoisting var is a byproduct hoisting functions because at the time it was the only 
//way to implement

//The Temporal dead zone is from the start of the variables scope until it is declared
//in global, the top of the file


//Hoisting example (variables)
if(false){
    console.log(me);        //Variables declared with var are hoisted to undefined
    console.log(job);       //Let is uninitialized, will give initialization error
    console.log(year);      //Const is uninitialized, will give initialization error
                            //function expressions and arrow expressions depend on
                            //if they used a var, let or const. not like function declarations

    var me      = "pal";     
    let job     = "teacher";
    const year  = 1991;
}

//Hoisting example (functions)
if(false){
    console.log(addDecl(1,2));      //Will run as expected because hoisting was intended for this?
    // console.log(addUnd(1,2));    //addUnd is not a function, currently set as undefined due to hoisting var
                                    //only the declaration is being hoisted, initialized as undefined not as the function expression

    console.log(addExpr(1,2));      //addExpr is uninitialized, will give initialization error (TDS)
    console.log(addArrow(1,2));     //addArrow is uninitialized, will give initialization error (TDS)


    function addDecl(a, b){
        return a + b;
    }

    var addUnd = function(a, b){
        return a+b;
    }

    const addExpr = function(a, b){
        return a + b;
    }

    const addArrow = (a, b) => a + b;
}

//Examples of hoisting being dangerous
if(false){
    if(!numProducts)                    //numProducts is hoisted and initially set as undefined
        deleteShoppingCart();           //so it would run this function

    var numProducts = 10;

    function deleteShoppingCart(){
        console.log("All products deleted!");
    }

    //Global namespace pollution, variables declared with var outside of any function become 
    //properties of the global object (window in browsers, global in node.js)
    //This can lead to unintentionally overwriting global variables and conflicts between scripts


    var x   = 1;                        //This can be accessed in the window object
    let y   = 2;                        //let and const cannot as they do not create properties on the window object
    const z = 3;

    console.log(x === window.x);  //true, x is a property of the global object (window)
    console.log(y === window.y);  //false, y is not a property of the global object
    console.log(z === window.z);  //false, z is not a property of the global object
}