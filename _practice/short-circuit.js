'use strict';

const bigObject = {
    prop1: `string text`,
    prop2: 100,
    prop3: false,
    prop4: [1,2,3,4,5],

    f: function(){
        console.log(`bigObject function called`);
    },

    nestedObject: {
        nested1: {
            attr: `attribute`
        },
        nested2: {
            attr: `attribute`
        }
    },

    arr: [`a`,`b`,`c`,`d`]
}

if(true){
    // ?? for assigning value
    const res = bigObject?.prop5 ?? null;

    // Will return undefined
    console.log(`${bigObject?.prop5}`);
    // Will return null
    console.log(`res: ${res}`);
}

if(false){
    // Optional chaining with ??
    console.log(bigObject?.prop5 ?? `prop missing`);

    console.log(bigObject?.f1?.() ?? `function missing`);
}

if(false){
    // Short circuit || will return the first truthy
    console.log(undefined || `truthy`);
    console.log(undefined || null || `truthy`);
    console.log(undefined || `` || 1);

    // ?? is similar to || but only works with undefined or null
    console.log(undefined ?? null ?? `truthy`);
    console.log(0 ?? `truthy`);
}