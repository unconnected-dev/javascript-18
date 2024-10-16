'use strict';


//Introduced in ES6 (2015)

//Restaurant is an object literal, because we literally wrote it in code



// const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//Different way to insert property names
// const openingHours = {
//     // thu: {
//     [weekDays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     // fri: {
//     [weekDays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     // sat: {
//     [`day-${2+4}`]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };

// console.log(openingHours);

  

//   let order = function(starterIndex, mainIndex){
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   };

//The problem here is, openingHours has the same property name
// const restaurantCopy = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    
    //old method
    // oldOrderFunction: function(arg1, arg2){
    // },
    
    //new method, comes down to personal preference
    // newOrderFunction(arg1, arg2){
    // },

    
    //old method, you would assign to the property
    // openingHours: openingHours,
    
    //new method, just add the variable name
    //it will generate the property with the same variable name
    //if you change the variable name, you need to change
    //it in this object as well
    // openingHours,

    //you can also add anonymous functions
    //attached to variables
    // order, 
//   };

//  console.log(restaurantCopy.openingHours);
// console.log(restaurantCopy.order(1,2));