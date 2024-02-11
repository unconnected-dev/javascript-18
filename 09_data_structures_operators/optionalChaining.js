'use strict';


//Optional chaining was introduced in ES2020
//It provides a concise way to access properties of an object when
//it's uncertain whether the object or its properties are defined

//Designed to work with nullish coalescing operator


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
      },

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


//Useful for API where data may or may no exist
//Checking for undefined first
if(false){
    if(restaurant.openingHours.fri)
        console.log(restaurant.openingHours.fri.open);
}


//Deeply nested if statements are a problem
if(false){
    if(restaurant.openingHours && restaurant.openingHours.fri)
        console.log(restaurant.openingHours.fri.open);
}


//With optional chaining
//only if the property before the ? exists, will the child be read 
//otherwise undefined is immediatly returned
//exists in this case means not NULL or UNDEFINED
if(false){
    console.log(restaurant.openingHours.fri?.open);
}


//Multiple optional chaining, if opening hours exists, and friday exists. get the open
if(false){
    console.log(restaurant.openingHours?.fri?.open);
}


//This gives an error due to trying to get the child of undefined variable
if(false){
    console.log(restaurant.openingHours.fri.open);
}


//Optional chaining and nullish coalescing operator
if(false){
    const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

    for(let day of weekDays){
        let open = restaurant.openingHours[day]?.open ?? 'closed';
        console.log(`On ${day} we open at ${open}`);
    }
}


//Methods
//Can check if an object has a function before calling
if(false){
    console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
    console.log(restaurant.orderBest?.(0, 1) ?? 'Method does not exist');
}


//Arrays
let users = [{name: 'paul', email: 'hello@paul.io'}];

//Check if an array is empty
if(true){
    console.log(users[0]?.name ?? 'User array is empty');
}

//Otherwise we would do
if(false){
    if(users.length > 0) 
        console.log(users[0].name);
    else
        console.log('User array is empty');
}