//Improve on challenge 1
//BMI comparison 
console.log("Challenge 2");

compareBmi(78, 1.69, 92, 1.95);
compareBmi(95, 1.88, 85, 1.76);

function compareBmi(markWeight, markHeight, johnWeight, johnHeight){
    let markBmi = getBmi(markWeight, markHeight).toFixed(2);
    let johnBmi = getBmi(johnWeight, johnHeight).toFixed(2);

    //console.log(`Mark's BMI is ${markBmi} and John's BMI is ${johnBmi}`);

    if(markBmi === johnBmi)     console.log(`They have the same BMI (${markBmi})`);
    else if(markBmi > johnBmi)  console.log(`Mark's BMI (${markBmi}) is higher than John's ${johnBmi}`);
    else                        console.log(`John's BMI (${johnBmi}) is hgiher than Mark's ${markBmi}`);
}

//weight in kg, height in m
function getBmi(weight, height){
    //BMI = mass / (height * height)
    return weight / (height ** 2);
}