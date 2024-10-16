'use strict';

//Destructuring is taking an array or object
//and turning them into individual variables

//Array destructuring
// const arr       = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);


//Use commas , , to skip an element in the array
// const [first, , third] = restaurant.categories;
// console.log(first, third);


// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);


//Don't do this
//You could switch two variables around using a temp variable to hold one
// const temp = main;
// main       = secondary;
// secondary  = temp;
// console.log(main, secondary);


//What we want to do is this
//Create a new array with the variables inverted, then destruct them
// [main, secondary] = [secondary, main];
// console.log(main, secondary);


//restaurant.order() returns an array with 2 elements
//Receive 2 return values from a function and destructure them
// console.log(restaurant.order(2, 0));
// const [starter, main] = restaurant.order(2, 0);



//Nested destructuring 
// let nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(`i: ${i}, j: ${j}`);             

// nested[2][0] = 1;                       //This proves the nested array is 
// console.log(`i: ${i}, j: ${j}`);        //a shallow copy, which just is the reference
// console.log(nested);      


// const [x, , [y, z]] = nested;
// console.log(x, y, z);


// //Set default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);                  //8, 9, 1



//Destructuring objects
//The variables names need to match the object property names
//The order of elements does not matter so you don't need , , like with arrays
//This is useful for API calls
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories)


//To rename the variables to be different from the object properties
//This is useful for API data breakdowns
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);


//Setting default values
//menu and starterMenu are both arrays in restaurant
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);


//Mutating (changing) variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};       //Overwriting a, b

//When you start a line with {} JavaScript expects a code block
//so you need to add () first
// ({a, b} = obj);
// console.log(a, b);                      //23, 7


//Nested objects
// const {openingHours} = restaurant;
// const { fri }        = openingHours;      //object
// console.log(fri);

// const { fri: {open, close}, } = openingHours;
// console.log(open, close);



//You can pass an object into a function
//It can be hard to remember the order of parameters
//Then using destructuring 
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole 21',
//   mainIndex: 2,
//   starterIndex: 2
// });