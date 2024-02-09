'use strict';


//A set is a collection of unique values, no duplicates
//Elements are unique and order is irrelevant
//There are no indexes in Sets
//They are not intended to replace arrays


const restaurant = {
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

//Creating a set
//Pizza already exists in mainMenu, so the duplicate is removed
let orderSet = new Set(restaurant.mainMenu, 'Pizza');
// console.log(orderSet);


if(false){
    //Use .size not .length
    console.log(orderSet.size);
}

if(false){
    //Checking for values
    console.log(orderSet.has('Pizza'));
    console.log(orderSet.has('Bread'));
}

if(false){
    //Adding values
    //Still can't add duplicates
    orderSet.add('Garlic Bread'); 
    orderSet.add('Garlic Bread'); 
    console.log(orderSet);
}

if(false){
    //Delete
    orderSet.delete('Garlic Bread');
    console.log(orderSet);
    orderSet.clear();//Deletes all
}

if(false){
    //Loop through Set
    for(let order of orderSet)
        console.log(order);
}

if(false){
    //Strings are also iterables
    //Set will seperate them into individual characters
    console.log(new Set(`Jonas`));
}

if(false){
    let staff = ['waiter', 'chef', 'manager', 'chef', 'waiter', 'chef', 'waiter'];

    //Use spread operator on Set and create an array
    let uniqueStaff = [...new Set(staff)];
    console.log(uniqueStaff);
    console.log(uniqueStaff.length);

    //Find out how many unique letters in name
    console.log(new Set(`bobhope`).size);
}