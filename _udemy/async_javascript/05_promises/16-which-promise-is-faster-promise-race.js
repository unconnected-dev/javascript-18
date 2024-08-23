"use strict";


//John answers in 3 seconds, and he has an extra pen
var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);
    });
}

//Eugene answers in 5 seconds, and he doesn't have an extra pen
var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sorry man, got only one.'), 5000);
    });
}

//Susy answers in 2 seconds, and she also has an extra pen
var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have a pen for you!'), 2000);
    });
}

var askAtTheShop = () =>{
    return Promise.resolve('We always have pens. You can buy one for $1');
}



//Use `Promise.race` to determine which promise settles first (either fulfilled or rejected)
//`Promise.race` takes an array of promises as an argument and returns a single promise
//that resolves or rejects as soon as the first promise in the array settles

//The promise returned by `Promise.race` will resolve or reject with the value of the first 
//promise that settles, regardless of whether it is fulfilled or rejected
if(true){

    //Commented out this race for example below with `askAtTheShop`
    // Promise.race([askJohn(), askEugene(), askSusy()])

    //`askAtTheShop` is already resolved, so it will be the fastest response in this race
    Promise.race([askJohn(), askEugene(), askSusy(), askAtTheShop()])
        .then(value => {
            //Unlike `Promise.all`, `Promise.race` returns only one value: 
            //the result of the fastest promise in the array
            console.log(value)
        })
        .catch(reason => {
            //If the fastest promise is rejected, this block will handle that rejection
            console.log(`Rejected: ${reason}`);
        });
}


//Purpose of Promise.race: 
//  - It is used to determine which promise in a set settles first, whether it 
//    resolves or rejects

//Single Value Returned: 
//  - Unlike Promise.all, which waits for all promises to settle, Promise.race 
//    returns only the result of the fastest promise

//Handling Rejections: 
//  - If the fastest promise is rejected, the catch block will handle the rejection, 
//    just as it would for a resolved promise in the then block