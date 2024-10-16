'use strict';


//Short Circuiting / Short Circuit Evaluation
//Short circuiting involves certain operators `&&` and `||`
//It allows the compiler to avoid evaluating the second operand
//if the outcome of the expression can be determined by 
//evaluating only the first operand

//It can use ANY data type, return ANY data type

//`||` could set default values
//`&&` could execute code in second if first is true
 

//`||` OR operator short circuiting means
//If the first value is truthy it will be returned
if(false){
    console.log(3 || 'Jonas');              //3
    console.log('' || 'Jonas');             //Jonas
    console.log(true || 0);                 //true
    console.log(undefined || null);         //null
}


//In the example below `Hello` is the first truthy
//So it will short circuit the evaluation
if(false){
    console.log(undefined || 0 || '' || 'Hello' || 23 || null);
}

//The example below is the normal way to check if a value exists
//If it is not then it sets a default of 10
//Neither statement would work if numGuests = 0, because 0 is falsy
if(false){
    const restaurant = {
        name: 'Capri',
        numGuests: 0
    };

    if(false)
        restaurant.numGuests = 23;

    let guests = restaurant.numGuests ? restaurant.numGuests : 10;
    console.log(guests);
}


//The example below is a short circuit with `||`
//It accomplishes the same as the previous example
//If it used `??` it would return 0
if(false){
    const restaurant = {
        name: 'Capri',
        numGuests: 0
    };

    if(false)
        restaurant.numGuests = 23;

    let guestsShort = restaurant.numGuests || 10;
    console.log(guestsShort);
}


//`&&` AND operator short circuiting means
//When the first value is falsy the expression stops
//It returns the first falsy or last truthy
if(false){
    console.log(0 && 'Jonas');                          //0
    console.log(7 && 'Jonas');                          //Jonas
    console.log('Hello' && 23 && null && 'Jonas');      //null
}


//The example below is the normal way to check if a function exists
//If it doesn't the function is not called
if(true){
    const restaurant = {
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        //Rest pattern example
        //See restPatternAndParameters.js
        orderPizza: function(mainIngredient, ...otherIngredients){
            console.log(mainIngredient);
            console.log(otherIngredients);
        },
    }

    if(restaurant.orderPizza){
        restaurant.orderPizza('mushrooms', 'spinach');
    }
}

//The example below is a short circuit with `&&`
//It accomplishes the same as the previous example
//It does make things harder to read
if(false){
    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        //Rest pattern example
        //See restPatternAndParameters.js
        orderPizza: function(mainIngredient, ...otherIngredients){
            console.log(mainIngredient);
            console.log(otherIngredients);
        },
    }

    restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
}