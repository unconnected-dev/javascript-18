"use strict";

//Compare average scores
console.log("Challenge 1");

compare([44,23,71],[65,54,49]);
compare([85,54,41],[23,34,27]);

function compare(dolphinScores, koalaScores){
    let avgDolphins = calcAverage(dolphinScores);
    let avgKoalas = calcAverage(koalaScores);
    
    checkWinner(avgDolphins, avgKoalas);
}

function calcAverage(scores){
    let total = scores.reduce((acc, tot) => acc + tot);
    return total / scores.length;
}

function checkWinner(avgDolphins, avgKoalas){
    // if(avgDolphins === avgKoalas)       console.log(`The game was a draw ${avgDolphins} : ${avgKoalas}`);
    // else if(avgDolphins > avgKoalas)    console.log(`Dolphins win ${avgDolphins} : ${avgKoalas}`);
    // else                                console.log(`Koalas win ${avgKoalas} : ${avgDolphins}`);

    if(avgDolphins >= 2 * avgKoalas)        console.log(`Dolphins win ${avgDolphins} : ${avgKoalas}`);
    else if(avgKoalas >= 2 * avgDolphins)   console.log(`Koalas win ${avgKoalas} : ${avgDolphins}`);
    else                                    console.log(`No team wins`);    
}