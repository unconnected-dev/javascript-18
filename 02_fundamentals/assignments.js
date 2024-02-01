"use strict";

function newAssignment(assignmentNumber){
    console.log("Assignment " + assignmentNumber);
}


//Assignment 1
if(false){
    newAssignment(1);
    let myString = describeCountry("England", 67, "London");
    console.log(myString);

    function describeCountry(country, population, capitalCity){
        return `${country} has ${population} million people and its capital city is ${capitalCity}`;
    }
}


//Assignment 2
if(false){
    newAssignment(2);
    let worldPopulation = 7900;
    let chinaPopulation = 1441;
    let ukPopulation = 67;
    let averagePopulation = 33;

    function percentageOfWorld1(population){
        return ((population/worldPopulation) * 100).toFixed(2);
    }
    console.log(`The UK's population of the world is ${percentageOfWorld1(ukPopulation)}%`);

    const percentageOfWorld2 = function(population){
        return ((population/worldPopulation) * 100).toFixed(2);
    }
    console.log(`China's population of the world is ${percentageOfWorld2(chinaPopulation)}%`);

    const percentageOfWorld3 = population => ((population/worldPopulation) * 100).toFixed(2);
    console.log(`The average country's population of the world is ${percentageOfWorld3(averagePopulation)}%`);
}


//Assignment 3
if(false){
    newAssignment(3);
    let desc = describePopulation("China", 1441)
    console.log(desc);

    function describePopulation(country, population){
        return `${country} has ${population} million people, which is about ${calcPercentageOfWorldPopulation(population)}% of the world.`;
    }

    function calcPercentageOfWorldPopulation(population){
        let worldPopulation = 7900;
        return Number(((population/worldPopulation) * 100).toFixed(2));
    }
}


//Assignment 4
if(false){
    newAssignment(4);
    let populations = [67, 1441, 33];
    let populationPercentages = [];
    console.log(`The array populations has 4 elements: ${populations.length ===4}`);

    for(let i = 0; i < populations.length; i++)
        populationPercentages.push(calcPercentageOfWorldPopulation(populations[i]));

    console.log(populations);
    console.log(populationPercentages);

    function calcPercentageOfWorldPopulation(population){
        let worldPopulation = 7900;
        return Number(((population/worldPopulation) * 100).toFixed(2));
    }
}


//Assignment 5
if(false){
    newAssignment(5);
    let neighbours = ["Wales", "Scotland"];

    neighbours.push("Utopia");
    console.log(neighbours);
    neighbours.pop();
    console.log(neighbours);

    if(!neighbours.includes("Germany")){
        console.log("Probably not a central European country");
    }

    neighbours[neighbours.length - 1] = "New Scotland";
    console.log(neighbours);

    neighbours[neighbours.indexOf("Wales")] = "New Wales";
    console.log(neighbours);
}


//Assignment 6
if(false){
    newAssignment(6);
    let myCountry = {
        country: "England",
        capital: "London",
        language: "English",
        population: 67,
        neighbours: ["Wales", "Scotland"]
    }

    console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} people, ${myCountry.neighbours.length} neighbours and a capital called ${myCountry.capital}`);

    myCountry.population+=2;
    console.log(`population: ${myCountry.population}`);
    myCountry["population"]-=2;
    console.log(`population: ${myCountry.population}`);
}


//Assignment 7
if(false){
    newAssignment(7);
    let myCountry = {
        country: "England",
        capital: "London",
        language: "English",
        population: 67,
        neighbours: ["Wales", "Scotland"],
        describe: function(){
            return `${this.country} has ${this.population} million ${this.language} people, ${this.neighbours.length} neighbours and a capital called ${this.capital}`;
        },
        checkIsIsland: function(){
            this.neighbours.length > 0 ? this.isIsland = true : this.isIsland = false;
        }
    }

    console.log(myCountry.describe());
    myCountry.checkIsIsland();
    console.log(`isIsland: ${myCountry.isIsland}`);
}


//Assignment 8
if(false){
    newAssignment(8);
    for(let i = 1; i <= 50; i++)
        console.log(`Voter number ${i} is voting`);
}


//Assignment 9
if(false){
    newAssignment(9);
    let populations = [67, 1441, 33];
    let populationPercentages = [];

    for(let i = 0; i < populations.length; i++)
        populationPercentages.push(calcPercentageOfWorldPopulation(populations[i]));

    console.log(populationPercentages);

    function calcPercentageOfWorldPopulation(population){
        let worldPopulation = 7900;
        return Number(((population/worldPopulation) * 100).toFixed(2));
    }
}



//Assignment 10
if(false){
    newAssignment(10);
    let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

    for(let i = 0; i < listOfNeighbours.length; i++){
        for(let j =0; j < listOfNeighbours[i].length; j++)
            console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}


//Assignment 11
if(false){
    newAssignment(11);
    let populations = [67, 1441, 33];
    let populationPercentages = [];
    let i = 0;

    while(populationPercentages.length !== populations.length){
        populationPercentages[i] = calcPercentageOfWorldPopulation(populations[i]);
        i++;
    }

    console.log(`populationPercentages: ${populationPercentages}`);

    function calcPercentageOfWorldPopulation(population){
            let worldPopulation = 7900;
            return Number(((population/worldPopulation) * 100).toFixed(2));
        }
}