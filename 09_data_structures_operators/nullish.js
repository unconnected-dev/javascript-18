'use strict';


//Nullish Coalescing Operator (??)
//The nullish coalescing operator is a JavaScript operator introduced in ES11 (2020)
//It provides a concise way to handle situations where a variable might be null or
//undefined by returning a default value only if the variable is null or undefined

//Similar to ||
//Returns a default value if a variable may be null or undefined


//Basic example
//With || difference
if(false){
    const someVariable = 0;
    const defaultValue = 'default';

    const result = someVariable || defaultValue;                        //|| checks for falsy values 0, "", 0, null, undefined, NaN
    console.log(result);                                                //Output: 'default' (0 is falsy)

    const result2 = someVariable ?? defaultValue;                       //?? checks for null and undefined
    console.log(result2);                                               //Output: 0 (0 is not null or undefined)

}

//Ternary conditional operator
if(true){
    const restaurant = {
        name: 'Capri',
        numGuests: 0
    };

    restaurant.numGuests = 23;
    const guests = restaurant.numGuests ? restaurant.numGuests : 10;    //? checks for truthy statement
    console.log(guests);


    // Nullish: null and undefined (NOT 0 or '')
    // Only if numGuests was null or undefined would 10 be used
    restaurant.numGuests = 0;
    const guestsCorrect = restaurant.numGuests ?? 10;
    console.log(guestsCorrect);
}
