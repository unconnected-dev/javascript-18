'use strict';


//Logical Assignment Operators
//Introduced in ES2021
const restaurant1 = {
    name: 'Capri',
    numGuests: 20
};

const restaurant2 = {
    name: 'La Pizza',
    owner: 'Giovanni Rossi'
};

const restaurant3 = {
    name: 'zero case',
    numGuests: 0
}


//This works because of short circuiting
if(false){
    restaurant1.numGuests = restaurant1.numGuests || 10;
    restaurant2.numGuests = restaurant2.numGuests || 10;
    console.log(restaurant1);
    console.log(restaurant2);
}


//Logical OR assignment operator
//Does the same as the short circuit above
//assigns a value to a variable if the variable is falsy
if(false){
    restaurant1.numGuests ||= 10;
    restaurant2.numGuests ||= 10;
    restaurant3.numGuests ||= 10;                               //has the issue with 0 as falsy

    console.log(restaurant1);
    console.log(restaurant2);
    console.log(restaurant3);
}


//Logical nullish assignment operator
if(false){
    restaurant1.numGuests ??= 10;
    restaurant2.numGuests ??= 10;
    restaurant3.numGuests ??= 10;//0 is fixed

    console.log(restaurant1);
    console.log(restaurant2);
    console.log(restaurant3);
}


//This works because of short circuiting
//It will also attach .owner to the object
if(true){
    restaurant1.owner = restaurant1.owner && 'Anonymous';       //remains undefined
    restaurant2.owner = restaurant2.owner && 'Anonymous';       //will set as anonymous

    console.log(restaurant1);
    console.log(restaurant2);
}


//Logical AND assignment operator
//does the same as the short circuit above
//but it does NOT attach .owner to the object
if(false){
    restaurant1.owner &&= 'Anonymous';
    restaurant2.owner &&= 'Anonymous';

    console.log(restaurant1);
    console.log(restaurant2);
}