'use strict';


//Logical operators
//Can use ANY data type, return ANY data type
//short circuiting, short circuit evaluation

//OR operator could set default values
//AND operator could execute code in second if first is true
 

//OR operator
//Short circuiting means
//If the first value is truthy it will be returned
if(false){
    console.log(3 || 'Jonas');              //3
    console.log('' || 'Jonas');             //Jonas
    console.log(true || 0);                 //true
    console.log(undefined || null);         //null
}


//Hello is the first truthy
//So it will short circuit the evaluation
if(false){
    console.log(undefined || 0 || '' || 'Hello' || 23 || null);
}

//Normal way to check if a value exists
//If not set a default of 10
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


//Short circuit with ||
if(true){
    const restaurant = {
        name: 'Capri',
        numGuests: 0
    };

    if(false)
        restaurant.numGuests = 23;

    let guestsShort = restaurant.numGuests || 10;
    console.log(guestsShort);
}

//AND operator
//Short circuits when the first value is falsy
//Returns the first falsy or last truthy
if(false){
    console.log(0 && 'Jonas');                          //0
    console.log(7 && 'Jonas');                          //Jonas
    console.log('Hello' && 23 && null && 'Jonas');      //null
}


//Normal way to check if a function exists
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

    if(restaurant.orderPizza){
        restaurant.orderPizza('mushrooms', 'spinach');
    }
}

//It does make things harder to read probably
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