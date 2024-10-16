"use strict";

//Calculate tip averages
console.log("Challenge 4");

let myBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let myTips = [];
let myTotals =[];

for(let i = 0; i < myBills.length; i++){
    myTips.push(calcTip(myBills[i]));
    myTotals.push(myBills[i] + myTips[i]);
}

console.log(myBills);
console.log(myTips);
console.log(myTotals);

console.log(`myBills avg: ${calcAverage(myBills)}`);
console.log(`myTips avg: ${calcAverage(myTips)}`);
console.log(`myTotals avg: ${calcAverage(myTotals)}`);

function calcTip(bill){
    return bill >=50 && bill <= 300 ? Number((bill * 0.15).toFixed(2)) : Number((bill * 0.20).toFixed(2));
}

function calcAverage(arr){
    return Number((arr.reduce((tot, acc) => tot + acc, 0) / arr.length));
}