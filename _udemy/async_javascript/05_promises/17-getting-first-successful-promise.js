"use strict";


//John answers in 3 seconds, and he has an extra pen.
var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Yep, I got one extra pen.'), 3000);
    });
}

//Eugene answers in 1 second1, and he doesn't have an extra pen.
var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Sorry man, got only one.'), 1000);
    });
}

//Susy answers in 2 seconds, and she also has an extra pen.
var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Sure, I have a pen for you!'), 2000);
    });
}



//This block demonstrates how `Promise.race` works
//`Promise.race` returns the result of the first promise to settle, whether it
//resolves or rejects. In this case, it would return Eugene's rejection since 
//he responds the fastest
if(false){
    Promise.race([askJohn(), askEugene(), askSusy()])
    .then(value => {
        console.log(value)
    })
    .catch(reason => {
        console.log(`Rejected: ${reason}`);
    });
}


//The `Promise.any` method is used when you want to get the first fulfilled 
//(resolved) promise. It ignores rejected promises until it finds one that resolves
//If all promises are rejected, `Promise.any` will throw an `AggregateError` 
//containing all the rejection reasons
if(true){
    Promise.any([askJohn(), askEugene(), askSusy()])
    .then(value => {
        console.log(value)
    })
    .catch(reason => {
        console.log(`Rejected: ${reason}`);
    });
}


//Purpose of Promise.any: 
//  - It is used to retrieve the first promise that resolves successfully from a 
//    set of promises, ignoring any that reject

//Handling Rejections: 
//  - If every promise in the set is rejected, Promise.any will throw an AggregateError,
//    which contains all the rejection reasons

//Comparison with Promise.race: 
//  - Unlike Promise.race, which settles with the first promise to either resolve or 
//    reject, Promise.any only resolves with the first successful result. If none 
//    succeed, it handles all failures together