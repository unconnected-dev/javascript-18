'use strict';


//Object.keys will get the property names
//Object.values will get the values of properties


//Creates an array with the property names
// let properties = Object.keys(restaurant.openingHours)
// console.log(properties);

// for(let day of Object.keys(restaurant.openingHours)){
//     console.log(day);
// }


// let openStr = `We are open on ${properties.length} days: `;
// for(let day of properties)
//     openStr += `${day}, `;

// console.log(openStr);
   

//Property values
// let values = Object.values(restaurant.openingHours);
// console.log(values);

//You can break down the internal object
// for(let value of Object.values(restaurant.openingHours)){
// for(let {open, close} of Object.values(restaurant.openingHours)){
//     console.log(`${open} : ${close}`);
// }


// let entries = Object.entries(restaurant.openingHours)
// console.log(entries);
// for(let [key, {open, close}] of Object.entries(restaurant.openingHours)){
//     console.log(`${key}:  open: ${open} - close: ${close}`);
// }
