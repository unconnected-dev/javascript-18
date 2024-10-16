`use strict`;



//Allows key, value pairs
//In objects the keys are always strings
//In maps they can be anything


// let rest = new Map();
// rest.set('name','Classico Italiano');
// rest.set(1,'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

//Using set, returns the updated map
// console.log(rest.set(3, 'Paris, France'));

//You can add keep adding sets
// rest.set('categories', ['Italian', 'Pizzeria'])
// .set('open',11)
// .set('close',23)
// .set(true, 'we are open')
// .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));


//You can use checks in the get
// let time = 21;
// console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));


//Check map has a key
// console.log(rest.has(true));


//Delete keys
// rest.delete(2);
// console.log(rest);


//Delete all keys
// console.log(rest.size);
// rest.clear();
// console.log(rest.size);


//The 2 arrays [1, 2] are not the same object on the heap
// rest.set([1, 2], 'test');
// console.log(rest.get([1, 2]));


//Instead you would do
//This means you can use objects as map keys
//Including DOM elements
// let ref = [1, 2];
// rest.set(ref, 'test');
// console.log(rest.get(ref));


// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(document.querySelector('h1')));



//Alternative method to set values without using .set all the time
//This is the same structure you get from
//Object.entries()
let question = new Map([ 
    //key, value
    ['question', 'what is the best programming language'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again']
]);
// console.log(question);


//Convert object to map
// console.log(Object.entries(restaurant.openingHours));
// let hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);


//Iterate over map
// for(let [key, value] of question){
//     if(typeof key === 'number')
//     console.log(`key: ${key}, value: ${value}`);
// }

//Use prompt then the boolean to get an answer
// let answer = Number(prompt(`answer`));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));


//Convert map to array
// console.log([...question]);
// let newMap = new Map([...question]);
// console.log(newMap);

// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());
