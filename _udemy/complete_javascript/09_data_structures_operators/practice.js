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






// let itemArray = [`other1`,`other2`,`other3`];
// joinedUp(`a`, ...itemArray ,`b`);
// //Rest pattern
// function joinedUp(...theRest){
//     for(let item of theRest){
//         console.log(item);
//     }
// }



//Spreading an array
// let itemArray = [`item1`, `item2`, `item3`];
// spreadMe(...itemArray);
// function spreadMe(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }


//Spread operator creates a new array, not a reference to the old array
// let oldArray = [1,2,3];
// let newArray = [...oldArray];
// oldArray[0]=4;
// console.log(oldArray);
// console.log(newArray);



// let {nest1:{attribute1: a, attribute2: b}, nest2}=bigObject.nestedObject;
// console.log(`${a} , ${b}`);


//Passing a function an object
// let anObjectForAFunction = {
//     firstName: `pAul`,
//     lastName: `bennett`,
//     age: 37
// }
// passMeAnObject(anObjectForAFunction);
// function passMeAnObject(o){
//     let {firstName, lastName, age} = o;
//     firstName = firstName.toLowerCase();
//     firstName = firstName[0].toUpperCase() + firstName.slice(1);
// }


//Destructuring an object
//switching variable names
// const {prop1: property1, prop2: property2} = bigObject;
// console.log(property1, property2); 

//setting an array as a default
// const {stringArray:optionArray = []} = bigObject;
// console.log(optionArray);


//Basic destructuring
// let aString = `all lower case string`;
// const [firstword, secondWord, ...remainingWords] = aString.split(` `);
// console.log(`${firstword} ${secondWord}`);
// console.log(remainingWords);


// const [firstword, secondWord] = returnTwoStringsInArray();
// console.log(`${firstword} + ${secondWord}`);
// function returnTwoStringsInArray(){
//     return [`first`, `second`];
// }


//Nested destructuring
// let anArray = [1,2,3,4,5,[6,7,[8,9]],[10]]

// let [,,,,five,[six,seven],[ten]] = anArray;
// console.log(ten);



// let properties = Object.keys(bigObject);
// console.log(properties);

// for(let i = 0; i < properties.length; i++){
//     console.log(bigObject[`${properties[i]}`]);
// }


// for(let [prop, val] of Object.entries(bigObject)){
//     console.log(`key: ${prop}, val: ${val}`);
// }


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

//rename from destructuring an object nested
// const {nestedObject: {nest1:{attribute1:at1, attribute2: at2}}} = bigObject;
// console.log(at1); 
// console.log(at2);


//rename destructure from object
// const {prop1: a, prop2: b} = bigObject;
// console.log(a);
// console.log(b);


// const aNestedArray = [1,2,[3,4]];
// const [,,[three]] = aNestedArray;
// console.log(three); 


// const [a, ...b] = bigObject.stringArray;
// console.log(b);

// console.log({...bigObject.nestedObject});

//destructure
// const anArray = [1,2,3,4,5,6];
// const [a,b,c, ...d] = anArray
// console.log(a,b,c);
// console.log(d);

//rest pattern compiles individual numbers into an array
//spread breaks an array up
// let spreadMe = [1,2,3,4,5,6,7,8,9];

// let [a, b, ...restMe] = spreadMe;
// console.log(a, b);
// console.log(restMe);

//spread pattern here
// spreadFunction(1,2,3, ...spreadMe);
//rest pattern here
// function spreadFunction(...args){
//     console.log(args);
// }


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


//Go through an objects properties
// let props = Object.keys(bigObject);
// for(let prop of props){
//     console.log(prop);
// }

// let vals = Object.values(bigObject);
// for(let val of vals){
//     console.log(val);
// }

// let entries = Object.entries(bigObject);
// for(let [key, val] of entries){
//     console.log(`key: ${key} , val: ${val}`);
// }


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


//Destructuring nested objects
// let { nestedObject: { nest1: {attribute1: altName1, attribute2: altName2}, nest2: altName3 }} = bigObject;
// console.log(altName1);
// console.log(altName2);
// console.log(altName3);


//Basic destructuring for object
// let { prop1: newVarName } = bigObject;
// console.log(newVarName);


//Destructuring
// console.log(recursionAgain(1, [...bigArray, ...optionalNestedArray]));

// function recursionAgain(depth, ...args){
//     let returnArray = [];

//     for(let element of args){
//         if(typeof element === 'number')
//             returnArray.push(element)
//         else{
//             let subReturn = recursionAgain(depth+1, ...element);
//             for(let val of subReturn)
//                 returnArray.push(val);
//         }
//     }

//     return returnArray;
// }


// let [a,,c] = returnArray()
// console.log(a, c);


// let [first, , third, ...fourth] = bigArray;
// console.log(first, third, fourth);


// let [a, b, ...c] = bigArray;
// console.log(a,b);
// console.log(c);


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


//Rest pattern
// function breakArray(...anArray){
//     for(let i = 0; i < anArray.length; i++)
//         console.log(`Breaking: ${anArray[i]}`);
// }


//Destructure
// let [a, b, ...c] = bigArray;
// console.log(`${a}, ${b}`);
// console.log(`${c}`);

// processArray(bigArray);
// function processArray(anArray){
//     let [a, b, ...c] = anArray;
//     console.log(`${a} + ${b} = ${a + b}`);

//     if(c.length >= 2)
//         processArray(c);
// }


// let [a, b, [c, d], [e, f]] = optionalNestedArray;
// process(a,b,c,d,e,f);

// let [a, b, c = 1, d = 1] = [2, 3];
// process(a,b,c,d);

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



// let {stringArray: a, otherStringArray: b, ...c} = bigObject;
// console.log(a, b, c);

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