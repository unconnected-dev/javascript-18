"use strict";
//Calculate tip percentages
console.log("Challenge 2");

let myBills = [125,555,44]
let myTips = [];
let myTotals = [];

for(let i = 0; i < myBills.length; i++){
    myTips.push(calcTip(myBills[i]));
    myTotals.push(myBills[i] + myTips[i]);
}

console.log(myBills);
console.log(myTips);
console.log(myTotals);

function calcTip(bill){
    let billPercentage = bill/100;
    return bill >=50 && bill <= 200 ? billPercentage * 15 : billPercentage * 20;
}