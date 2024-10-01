"use strict";

function newAssignment(assignmentNumber){
    console.log("Assignment " + assignmentNumber);
}


//Assignment 1
if(false){
    newAssignment(1);
    let country     = "England";
    let continent   = "Europe";
    let population1 = "67 million";
    // console.log(country + " in " + continent + " has " + population1 + " people");
    console.log(`${country} in ${continent} has ${population1} people`);
}


//Assignment 2
if(false){
    newAssignment(2);
    let country     = "England";
    let population2 = 67000000;
    let isIsland    = true;
    let language;
    console.log(`typeof country: ${typeof country}`);
    console.log(`typeof population: ${typeof population2 }`);
    console.log(`typeof isIsland: ${typeof isIsland}`);
    console.log(`typeof language: ${typeof language}`);
}


//Assignment 3
if(false){
    newAssignment(3);
    let population3 = 67000000;
    let halfPopulation = population3/2;
    halfPopulation++;
    console.log(`Half the population +1 is : ${halfPopulation}`);

    let finlandPopulation = 6000000;
    if(population3 > finlandPopulation)       console.log(`My countries population is greater`);
    else if (population3 < finlandPopulation) console.log(`Finlands population is greater`);
    else                                      console.log(`The two countries have the same population`);

    let averagePopulation = 33000000;
    if(population3 > averagePopulation)       console.log(`My countries population is greater than the average`);
    else if (population3 < averagePopulation) console.log(`My countries population is lower than the average`);
    else                                      console.log(`My countries population is average`);

    // let country = "Portugal";
    // let continent = "Europe";
    // let language = "Portuguese";
    // let population = 11000000;
    // console.log(`${country} is in ${continent}, and it's ${population} people speak ${language}`);
}


//Assignment 4
if(false){
    newAssignment(4);
    let country           = "England";
    let population4       = 67000000;
    let averagePopulation = 33000000;
    let difference        = Math.abs(population4 - averagePopulation);

    if(population4 === averagePopulation) 
        console.log(`${country} has a population of ${population4} which is average`);
    else
        console.log(`${country} is ${difference} ${population4 > averagePopulation ? "above" : "below"} average`);
}


//Assignment 5
if(false){
    newAssignment(5);
    console.log('9' - '5');                 //4 number
    console.log('19' - '13' + '17');        //617 string
    console.log('19' - '13' + 17);          //23 number
    console.log('127' < 57);                //false (will convert the string to a number)
    console.log(5 + 6 + '4' + 9 - 4 - 2);   //1143 number
}


//Assignment 6
if(false){
    newAssignment(6);
    let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

    if(numNeighbours === 1)         console.log(`Only 1 border!`);
    else if(numNeighbours > 0)      console.log(`More than 1 border`);
    else                            console.log(`No borders!`);
}


//Assignment 7
if(false){
    newAssignment(7);
    let criteria = ["English", 3000000];
    let country = ["English", 67000000, "England"];

    if(country[0] === criteria[0] && country[1] < criteria[1])
        console.log(`You should live in ${country[2]}`);
    else   
        console.log(`You should not live in ${country[2]}`);
}


//Assignment 8
if(false){
    newAssignment(8);
    let language = "english";

    switch(language){
        case "chinese":
        case "mandarin":
            console.log("Most number of native speakers");
            break;

        case "spanish":
            console.log("second place");
            break;
        
        case "english":
            console.log("third place");
            break;

        case "hindi":
            console.log("fourth place");
            break;
        
        case "arabic":
            console.log("fifth place");
            break;

        default:
            console.log("great language too");
            break;
    }
}


//Assignment 9
if(false){
    newAssignment(9);
    let averagePopulation = 33000000;
    let englandPopulation = 67000000;
    console.log(`Englands population is ${englandPopulation > averagePopulation ? "above" : "below"} average`);
}