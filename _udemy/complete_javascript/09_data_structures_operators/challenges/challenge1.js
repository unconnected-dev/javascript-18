'use strict';

//Destructuring Data
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski',],
        ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze',],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

if(false){
    let {team1, team2, players, } = game;
    let [players1, players2] = [players[0], players[1]];

    console.log(`team1: ${team1}`);
    console.log(`team2: ${team2}`);
    console.log(`players1: ${players1}`);
    console.log(`players2: ${players2}`);
}

if(false){
    let [players1,players2] = game.players;
    console.log(players1);
    console.log(players2);
}

if(false){
    let [gk, ...fieldPlayers] = game.players[0];
    console.log(`goalkeeper: ${gk}`);
    console.log(`fieldplayers: ${fieldPlayers}`);
}

if(false){
    let allPlayers = [...game.players[0], ...game.players[1]];
    console.log(allPlayers);
}

if(false){
    let playersFinal = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
    console.log(playersFinal);
}

if(false){
    let { odds } = game;
    let {team1, x:draw, team2} = odds;
    console.log(team1, draw, team2);
}

if(false){
    function printGoals(...players){
        console.log(players);
        console.log(`${players.length} goals were scored`);
    }

    printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
    printGoals(...game.scored);
}

if(false){
    let { odds } = game;

    //Short circuits when the first value is false
    odds.team1 < odds.team2 && console.log('team 1 has better odds');
    odds.team1 > odds.team2 && console.log('team 2 has better odds');
}

if(false){
    let { odds } = game;
    //Short circuits when the first value is true
    odds.team1 < odds.team2 || console.log('team 2 has better odds');
    odds.team1 > odds.team2 || console.log('team 1 has better odds');
}