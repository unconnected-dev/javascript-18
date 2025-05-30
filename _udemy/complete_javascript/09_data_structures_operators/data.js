'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Destructuring example
  //The names in the function need to be the same as the object
  //And they allow for immediate destructuring  
  //So the properties in the order don't have to match which makes it easy to specify the arguments
  //You can also add defaults
  orderDelivery: function({starterIndex = 1, mainIndex = 0 , time = '20:00', address}){
    console.log(`Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  //Spread example
  //See spread.js
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //Rest pattern example
  //See restPatternAndParameters.js
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
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

