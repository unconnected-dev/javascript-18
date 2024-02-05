"use strict";
//Iterate through the submitted arrays
console.log("Challenge 1");

if(false){
    function printForecast1(tempArray){
        let str = '... ';
        for(let i = 0; i < tempArray.length; i++)
            str+=`${tempArray[i]}C in ${i+1} days... `;

        console.log(str);
    }
    
    printForecast1([17, 21, 23]);
    printForecast1([12, 5, -5, 0, 4]);
}

if(false){
    function printForecast2(tempArray){
        let i = 1;
        let str = "";
        for(let val of tempArray){
            str += `${val}C in ${i} days...\n`;
            i++;
        }
        console.log(str);
    }

    printForecast2([17, 21, 23]);
    printForecast2([12, 5, -5, 0, 4]);
}

if(true){
    function printForecast3(tempArray){
        let i = 1;
        let str = "";

        tempArray.forEach(element => {
            str += `${element}C in ${i} days...\n`;
            i++;
        });
        console.log(str);
    }

    printForecast3([17, 21, 23]);
    printForecast3([12, 5, -5, 0, 4]);
}