'use strict';

// General Object Practice

const bigObject = {
    prop1: `string text`,
    prop2: 100,
    prop3: false,
    prop4: [1,2,3,4,5],

    f: function(){
        console.log(`bigObject function called`);
    }
}

if(true){
    const vals = Object.values(bigObject);
    for(let val of vals){
        console.log(`${val}`);
    }
}

if(false){
    function passObject(obj){
        for(const prop in obj){
            console.log(`${prop}`);
        }
    }
    passObject(bigObject);
}

if(false){
    const { prop1: property1, prop2: property2, ...properties } = bigObject;

    console.log(`${property1}`);
    console.log(`${property2}`);
    console.log(`${properties}`);
}

if(false){
    for(const prop in bigObject){
        if(typeof bigObject[prop] === "function"){
            bigObject[prop]();
        }
    }
}

if(false){
    // Iterating over properties of an object
    for(const prop in bigObject){
        console.log(`${prop}`);
    }    
}