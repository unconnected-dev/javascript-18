'use strict';


//The spread operator (...)
//Expands an array into individual elements
//We use the spread operator where we would write multiple values seperate by commas

//The spread operator is like destructuring but takes all elements
//and does not create new variables


//Don't do this
//2 numbers are put in, then the array by referring to each array element
if(false){
    const arr       = [7, 8, 9];
    const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
    console.log(badNewArr);
}


//What we want to do is this
if(false){
    const arr       = [7, 8, 9];
    const newArr = [1, 2, ...arr];
    console.log(newArr);
}


//Using the spread operator goes through them as indivudal values
//Logged the elements individually in console
if(false){
    const newArr = [1, 2, 7, 8, 9]
    console.log(...newArr);
}


//Spread operator creates a new array
//It is not a reference to the old array
if(false){
    const restaurant = {
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    }

    const newMenu = [...restaurant.mainMenu, 'Gnocci'];         //Can add elements before/after
    console.log(newMenu);                           
}


//Spread operator creates shallow copies
if(false){
    const restaurant = {
        name: 'Classico Italiano',
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
        nested:[["test"]]
    }

    const nestedCopy = [...restaurant.nested];
    nestedCopy[0].push("new element");
    
    console.log("nestedCopy");
    for(let item of nestedCopy){
        console.log(item);
    }
    
    console.log("restaurant.nested");
    for(let item of restaurant.nested){
        console.log(item);
    }
}


//Join two arrays
if(false){
    const restaurant = {
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    }

    const twoMenus = [...restaurant.starterMenu, ...restaurant.mainMenu];
    console.log(twoMenus);
}


//Spread operator works on all iterables
//Iterables are: arrays, strings, maps, sets. NOT objects
if(false){
    const str = 'Jonas';
    const letters = [...str, ' ', 'S.'];
    console.log(letters);                  
    console.log(...str);                   
}


//Can only use spread operator when building an array or passing to a function
//In the string literal below multiple values are not expected in the ${} so 
//it creates an error
if(false){
    const str = 'Jonas';
    // console.log(`${...str} test`);          
}


//Warning, this brings up prompts in browser on save
if(false){
    const ingredients = [prompt(`Request! ingredient1`), prompt(`ingredient2`), prompt(`ingredient3`)];
    console.log(ingredients);
    restaurant.orderPasta(...ingredients);
}


//Since ES2018 the spread operator also works on objects, even though
//they are not iterables, it creates a shallow copy
if(true){
    const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    }

    const newRestaurant = {founding: 1888, ...restaurant, founder: 'Bob'};
    console.log(newRestaurant);
}