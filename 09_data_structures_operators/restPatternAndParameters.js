'use strict';


//Rest Pattern
//The rest pattern looks like the spread operator (...)
//It allows you to collect multiple elements of an array or properties of an object
//into a single variable

//We use the spread operator where we would write multiple variables seperated by commas 
//such as in functions. It kind of does the opposite of the spread operator
//Collecting multiple elements and compacting them into an array


//Spread operator example
//This is the spread operator as it is on the RIGHT side of the assignment operator (=) 
if(false){
    const arr = [1, 2, ...[3, 4]];
}

//Rest pattern example 
//This is the rest pattern, it is on the LEFT side of the assignment operator (=)
//It takes the remaining elements of the array and puts them into a new array
if(false){
    const [a, b, ...others] = [1, 2, 3, 4, 5];
    console.log(a, b, others);
}


//The rest pattern must always be the last one in the function parameters or
//in the destructuring pattern and there can be only one

//This line will not work as the rest pattern is not the last one in the function
// const [pizza, , risotto, ...otherFood, lastFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

//In the following example we get the first and third elements.
//The rest go into otherFood. The pattern array begins from the last variable
//delared (risotto in this case). The pattern does not include skipped elements
if(false){
    const restaurant = {
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    };
    const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
    console.log(pizza, risotto, otherFood);
}


//Objects rest pattern example 
//Remove sat from opening hours and get the remaining days
//Order does not matter for objects
if(false){
    const restaurant = {
        openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
        },
    };

    const {sat, ...weekDays} = restaurant.openingHours;
    console.log(weekDays);
}


//Functions with rest arguments
//In the example below due to rest pattern, numbers becomes an array of the numbers
//This allows the function to accept individual numbers as well as arrays if they 
//use the spread operator beforehand
if(false){
    const add = function(...numbers){
        // console.log(numbers);
        let sum = 0;
        for(let i = 0; i < numbers.length; i++)
            sum += numbers[i];
            
        console.log(sum);
    }
    add(1, 2);
    add(1, 2, 3);
    add(1, 2, 3, 4);


    //In the example below the spread operator submits 23, 5, 7 as seperate numbers
    //The add function repackages them back to into an array
    const x = [23, 5, 7];
    add(...x);
}


//In the example below, the function orderPizza takes the first ingredient
//as a single variable called mainIngredient, all others after that
//are put into an array called otherIngredients
if(false){
    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        //Rest pattern example
        orderPizza: function(mainIngredient, ...otherIngredients){
            console.log(mainIngredient);
            console.log(otherIngredients);
        },
    };

    restaurant.orderPizza('mushrooms', 'onion', 'olives');
    restaurant.orderPizza('mushrooms');                     //otherIngredients is an empty array now
}