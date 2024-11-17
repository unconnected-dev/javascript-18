127
'use strict';

//Top array and object
let bigArray = []
for(let i = 0; i < 10; i++)
    bigArray[i] = i;
// console.log(bigArray);

let optionalNestedArray = [1, 2, [3, 4], [5, 6], [8, 9, 10, [11,12], 13], 14];

function returnOptionalNestedArray(){
    return optionalNestedArray;
}

let bigObject = {
    prop1: 'aString',
    prop2: 10,
    prop3: false,
    prop4: undefined,
    prop5: [1,2,3,4,5],
    stringArray: ['option1', 'option2', 'option3', 'option4'],
    otherStringArray: ['other1', 'other2', 'other3'],
    nestedObject:{
        nest1:{
            attribute1: 'value1',
            attribute2: 'value2'
        },
        nest2:{
            attribute3: 'value3',
            attribute4: 'value4'
        }
    },
    functionProp(){
        
    }

}

let bigMap = new Map([
    //key           value
    [`aString`,     `stringProp`],
    [1,             `numProp`],
    [10,            `numProp`],
    [`numPropMin`,  1],
    [`numPropMax`,  10],
    [true,          `booleanPropTrue`],
    [false,         `booleanPropFalse`]
]);





//setting an array as a default
// const {stringArray:optionArray = []} = bigObject;
// console.log(optionArray);



//short circuit || will return the first truthy
// console.log(undefined || `test`);
// console.log(undefined || null || `not null`);
// console.log(undefined || `` || 1);
//?? is similar but only works with undefined OR null
// console.log(0 ?? `test`);


// let a = bigObject.prop6 || `unknown`;
// console.log(a);

// let a = bigObject.prop6 ?? false;
// console.log(a);


//you can add optional chaining to a functions () and use ??
// console.log(bigObject?.functionProp2?.() ?? `unavailable`); 


//need to remember to apply optional chaining and nullish
// let prop = bigObject?.prop6?.name ?? 'prop missing';
// console.log(prop);


//nullish
//need to remember to use ??
// let a = undefined;
// let b = a ?? 1;
// console.log(b);


// for(let [key, val] of bigMap){
//     console.log(key, val)
// }
    
//You can convert a map to an array
// for(let [key, val] of [...bigMap.entries()]){
//     console.log(key, val)
// }


// let aValue = 5;
// console.log(aValue >= bigMap.get(`numPropMin`) );
// console.log(aValue <= bigMap.get(`numPropMax`) );

// let aStatement = (aValue >= bigMap.get(`numPropMin`) && aValue <= bigMap.get(`numPropMax`)); 
// console.log(  bigMap.get(aStatement)  );



//Check logical assignment operator
// let ownerName = `John`;
// console.log(ownerName && `Anonymous`);


//Checking a variable is not set before assigning
// let a, b;
// a = b || 5;
// console.log(a);


//Use .entries to get the index and element of an array
// for(let [key, val] of bigObject.stringArray.entries()){
//     console.log(`${key} : ${val}`)
// }



//Short circuiting
//true OR false
// console.log(null || 0 || '' || undefined);                  //|| returns the first truth or last false
// console.log(3 && 'ten' && 'laststring' && 'last');          //&& returns the first false or last truth

// console.log(undefined ?? 1 ?? 'test');                          //??returns the first truth (not undefined or null)

// console.log( recurssion(...bigArray) );
// console.log(fixArray(0, ...optionalNestedArray));
// fixArray(...optionalNestedArray);


// let dump = fixArray(...bigArray, ...optionalNestedArray);
// console.log(dump);

//Using recursion to split an array with arrays inside arrays
// function fixArray(depth, ...args){
//     let newArray = [];
    
//     for(let i = 0; i < args.length; i++){
//         let arg = args[i]
//         if(typeof arg === 'number'){
//             console.log(`pushing: ${arg}`);
//             newArray.push(arg);
//         }
//         else{
//             console.log(`splitting: ${arg}`);
//             let subArray = fixArray(depth + 1, ...arg);
//             for(let j = 0; j < subArray.length; j++)
//                 newArray.push(subArray[j]);
            
//             if(depth !== 0)
//                 return newArray;
//         }
//     }
//     return newArray
// }

// function recurssion(...args){
//     let first = args.shift();
//     let last = args.pop();

//     console.log(`${first} + ${last} = ${first + last}`);

//     if(args.length >= 2)        return recurssion(...args);
//     else                        return args.length === 1 ? args[0] : null;
// }


// let [a, b, ...c] = bigObject.stringArray;
// console.log(a, b);
// console.log(c);

// breakArray(bigObject.stringArray);
// function breakArray([a, b, ...c]){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// passObject({anArray: bigObject.stringArray, aString: bigObject.prop1, aNumber: bigObject.prop2})

// function passObject({aString = '', aNumber = 0, anArray = []}){
//     console.log(aString);
//     console.log(aNumber);
//     console.log(anArray);
//     breakArray(...anArray);         //Spread operator
// }


// processArray(bigArray);
// function processArray(anArray){
//     let [a, b, ...c] = anArray;
//     console.log(`${a} + ${b} = ${a + b}`);

//     if(c.length >= 2)
//         processArray(c);
// }


// let [a, b, [c, d], [e, f]] = optionalNestedArray;
// process(a,b,c,d,e,f);


// function process(...args){
//     let total = 0;
//     for(let i = 0; i < args.length; i++)
//         total+= args[i];

//     console.log(total);
// }


//Using spread to seperate the string array elements and combine
// let combinedArray = [...bigObject.stringArray, ...bigObject.otherStringArray];
// console.log(combinedArray);

//Use spread again so can add more elements to the function 
// process(0, ...combinedArray, 1, 2);
// function process(...args){
//     console.log(args);
// }


//Use : to use a different variable name
//Don't forget objects don't need order
// let {prop1: a, prop3: b, ...c} = bigObject;
// console.log(a, b);
// console.log(c);


//Destructuring an objects arrays
//Tack on = [] for default values
// let {stringArray: someStrings = [], otherStringArray: otherStrings = []} = bigObject;
// console.log(someStrings);
// console.log(otherStrings);


//Default if variable doesn't exist
// let { prop1: a = '', prop2:b=0, prop6:c = 10} = bigObject;
// console.log(a,b,c);


// let firstLast = returnArray(9,8,7,6,5,4,3,2,1,0);
// console.log(firstLast);

//Rest pattern
//... will compile the submitted vairables into an array
// function returnArray(...args){
//     console.log(`total: ${args}`);

//     let first = args.shift();
//     let last = args.pop();

//     console.log(`first: ${first}`);
//     console.log(`last: ${last}`);
//     console.log(`remainder: ${args}`);

//     return [first, last, args];
// }