"use strict";

//Tip calculation
console.log("Challenge 4");

stateTotal(275);
stateTotal(40);
stateTotal(430);

function stateTotal(bill){
    const theTip = getTip(bill);
    const total = bill + theTip;

    console.log(`That is ${bill} plus ${theTip}`)
    console.log(`The total is ${total}`);
}

function getTip(theBill){
    const theTipPercentage = theBill >= 50 && theBill <= 300 ? 0.15 : 0.20;
    const theTipCalc       = theBill * theTipPercentage;
    return Number(theTipCalc.toFixed(2));
}