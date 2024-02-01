`use strict`;

//Some arrow functions
if(false){
    const addTogeather = (num1, num2) =>  num1 + num2;
    console.log(addTogeather(1,1));

    const attachTwoStrings = (str1, str2) => {
        return `${str1} ${str2}`
    }
    console.log(attachTwoStrings(`Hey`,`Bob`));
}

//Continue
if(false){
    for(let i = 0; i < 10; i++){
        if(i%2 === 0)   continue;
        else            console.log(`i: ${i}`);
    }
}

//Just trying the reduce function for arrays
//Along with spread operator and rest parameter
if(false){
    const reduceMe = [1,2,3,4,5,6,7,8,9,10];

    const calcAverage = (...someNumbers) => {
        let total = someNumbers.reduce((acc, tot) => acc+tot);
        return total / someNumbers.length
    }
    console.log(calcAverage(20, ...reduceMe));
}