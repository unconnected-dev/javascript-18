'use strict';


//For of loop was introduced in ES6 (2015)
//Provides concise and readable way to iterate over
//iterable objects such as arrays, strings, maps, etc


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

if(false){
    const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

    for(let item of menu){
        console.log(item);
    }
}

if(false){
    const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

    //.entries creates an array for each element, with the index, element
    for(let item of menu.entries()){
        console.log(`${item[0] + 1}: ${item[1]}`);
    }
    console.log(...menu.entries());
}

if(false){
    const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

    //Destructure the array
    for(let [num, item] of menu.entries()){
        console.log(`${num + 1}: ${item}`);
    }
}

