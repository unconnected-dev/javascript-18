`use strict`;

// const airLine = 'TAP Air Portugal';
// const plane   = 'A320';



//Strings are primatives but have methods like objects
//Whenever we call a method on a string, the string primative is converted to a string object
//This is called boxing, which is the object
//Then when the operation is done the object is returned to a primative
//This conversion is what happens in the background and is effectivly like the line below
// console.log(new String(`text`));
// console.log(typeof new String(`text`));
//All string methods return primatives, even if called on a string object like below
// console.log(typeof new String(`text`).slice(1));



//Strings are like arrays
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);

//You can do the same methods directly on a string
// console.log('XYZ'[0]);


// console.log(airLine.length);
// console.log('XYZ'.length);


// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));

//This is case sensitive
// console.log(airLine.lastIndexOf('Portugal'));


//Slice is the starting point, creating a new substring
//Because strings are primatives and cannot be mutated
//All methods will RETURN a new string
// console.log(airLine.slice(4));

//The 7th character is not included
// console.log(airLine.slice(4, 7));

// console.log(airLine.slice(0, airLine.indexOf(' ')));

//Use + 1 to get the first none space character
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));


//Negative starts from the end of the string
// console.log(airLine.slice(-2));

//This will cut off the last two characters in the string
// console.log(airLine.slice(1, -2));


// function checkMiddleSeat(seat){
//     //B and E are middle seats
//     const seatLetter = seat.slice(-1);
//     if(seatLetter === 'B' || seatLetter === 'E')    console.log(`You have the middle seat`);
//     else                                            console.log(`You are fine`);
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');


// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

//Fix capitalization in name
// const passenger = `jOnAS`;
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);


// console.log(capitalizeName(`pAuL`));
// function capitalizeName(name){
//     let returnName = name.toLowerCase();
//     return returnName[0].toUpperCase() + returnName.slice(1);
// }


//Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = ` Hello@Jonas.Io \n`;

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(compareEmails(email, normalizedEmail));

// function compareEmails(email1, email2){
//     return email1 === email2;
// }


//Replacing
// const priceGB = `288,97£`;
// const priceUS = priceGB.replace(`£`,`$`).replace(`,`,`.`);
// console.log(priceUS);


// const announcement = `All passengers come to boarding door 23. Boarding door 23`;
// console.log(announcement.replaceAll(`door`, `gate`));

//Using regular expressions
// console.log(announcement.replace(/door/g, `gate`));


//Booleans 
// const plane = `Airbus A320neo`;
// console.log(plane.includes(`A320`));
// console.log(plane.includes(`Boeing`));

// console.log(plane.startsWith(`Air`));

// if(plane.startsWith(`Airbus`) && plane.endsWith(`neo`))
//     console.log(`Part of the new airbus family`);
// else
//     console.log(`Not part of the new airbus family`);


//Practice exercise
// function checkBaggage(items){
//     const baggage = items.toLowerCase();
//     if(baggage.includes(`knife`) || baggage.includes(`gun`))
//         console.log(`you are not allowed on board`);
//         else
//         console.log(`welcome aboard`)
// }

// checkBaggage(`I have a laptop, some Good and a pocket Knife`);
// checkBaggage(`Socks and a camera`);
// checkBaggage(`Got some snacks and a gun for protection`);


//Splitting strings
// const aString = `a+very+long+string`;
// console.log(aString.split(`+`));

//Split and Join
// const [firstNameSplit, lastNameSplit] = `Paul Bennett`.split(` `);
// console.log(`${firstNameSplit} ${lastNameSplit}`);

// const newName = [`Mr.`, firstNameSplit, lastNameSplit.toUpperCase()].join(` `);
// console.log(newName);


// capitalizeName(`just some words`);
// function capitalizeName(name){
//     const nameSplit = name.toLowerCase().split(` `);
    
//     for(let i = 0; i < nameSplit.length; i++){
//         nameSplit[i] = nameSplit[i][0].toUpperCase() + nameSplit[i].slice(1);
//     }

//     console.log(nameSplit.join(` `)); 
// }


//Padding
// const message = `go to gate 23`;
// console.log(message.padStart(25, `.`));
// console.log(`paul`.padStart(25, `.`));
// console.log(`paul`.padEnd(25,`.`));


// maskCreditCard(1111222233334444);
// function maskCreditCard(number){
//     const str = String(number);
//     const lastFour = str.slice(-4);
//     console.log(lastFour.padStart(str.length,`*`));
// }


//Repeat
// const message = `bad weather... all departures delays... `;
// console.log(message.repeat(5));



