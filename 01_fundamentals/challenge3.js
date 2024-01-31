//Get team average score to decide who won
console.log("Challenge 3");

const minimumScoreRequirement = 100;

compareScores([96, 108, 89], [88, 91, 110]);
compareScores([97, 112, 101], [109, 95, 123]);
compareScores([97, 112, 101], [109, 95, 106]);

function compareScores(dolphinScores, koalaScores){
    let dolphinAverage = (dolphinScores.reduce((runTotal, val) => runTotal + val, 0) / dolphinScores.length).toFixed(2);
    let koalaAverage = (koalaScores.reduce((runTotal, val) => runTotal + val, 0) / koalaScores.length).toFixed(2);

    console.log(`Dolphin avg (${dolphinAverage}) : Koala avg (${koalaAverage})`);
    if(dolphinAverage >= minimumScoreRequirement || koalaAverage >= minimumScoreRequirement){
        if(dolphinAverage === koalaAverage)     console.log(`It is a draw`);
        else if(dolphinAverage > koalaAverage)  console.log(`Dolphins win!`);
        else                                    console.log(`Koalas win!`);
    }
    else
        console.log(`Neither team scored over ${minimumScoreRequirement}`);
}