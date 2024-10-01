"use strict";
//BMI comparison
console.log("Challenge 3");

let mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBmi: function(){
        let bmi = Number((this.mass/(this.height**2)).toFixed(2));
        this.bmi = bmi;
        return bmi;
    },
    desc: function(){
        console.log(`${this.fullName}'s weighs ${this.mass}kg and is ${this.height}m tall with a BMI of ${this.bmi}`);
    }
}

let john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBmi: function(){
        let bmi = Number((this.mass/(this.height**2)).toFixed(2));
        this.bmi = bmi;
        return bmi;
    },
    desc: function(){
        console.log(`${this.fullName}'s weighs ${this.mass}kg and is ${this.height}m tall with a BMI of ${this.bmi}`);
    }
}

//Run  calculations first
mark.calcBmi();
john.calcBmi();

mark.desc();
john.desc();

if(mark.bmi > john.bmi)         console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher that ${john.fullName}'s (${john.bmi})`);
else if(john.bmi > mark.bmi)    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher that ${mark.fullName}'s (${mark.bmi})`);
else                            console.log(`Mark and John have the same BMI`);