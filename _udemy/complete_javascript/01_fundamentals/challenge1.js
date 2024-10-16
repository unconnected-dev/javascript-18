"use strict";

//BMI comparison 
console.log("Challenge 1");

compareBmi(78, 1.69, 92, 1.95);
compareBmi(95, 1.88, 85, 1.76);

function compareBmi(markWeight, markHeight, johnWeight, johnHeight){
    let markBmi = getBmi(markWeight, markHeight);
    let johnBmi = getBmi(johnWeight, johnHeight);

    if(markBmi === johnBmi)     console.log("They have the same BMI");
    else if(markBmi > johnBmi)  console.log("Mark has the greater BMI");
    else                        console.log("John has the greater BMI");
}

//weight in kg, height in m
function getBmi(weight, height){
    //BMI = mass / (height * height)
    return weight / (height ** 2);
}