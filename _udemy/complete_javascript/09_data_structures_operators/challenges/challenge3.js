'use strict';


const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);


//   let uniqueEvents = [...new Set(gameEvents.values())];
//   console.log(uniqueEvents);
  
//   for(let event of uniqueEvents)
//     console.log(event);
  
// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`An event happened, on average every ${Math.round(90/gameEvents.size)} minutes`);


// for(let eventArr of gameEvents){
//     let minute = eventArr[0];
//     let event = eventArr[1];

//     console.log(`[${minute<=44? `FIRST` : `SECOND`} HALF] ${minute} : ${event}`);
// }

// for(let [minute, event] of gameEvents){
//     console.log(`[${minute<=44? `FIRST` : `SECOND`} HALF] ${minute} : ${event}`);
// }