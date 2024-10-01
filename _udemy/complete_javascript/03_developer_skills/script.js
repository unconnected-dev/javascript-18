'use strict';

//Convert celsius to kelvin
if(false){
    function measureKelvin(){
        const measurement = {
            type: 'temp',
            unit: 'celsius',
            value: Number(prompt('Degrees celsius'))
        }
        const kelvin = measurement.value + 273;
        return kelvin;
    }

    console.log(measureKelvin());
}

//Looking for max and min value in array
if(false){
    const temperatures_1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
    const temperatures_2 = [100];

    compareTemps(temperatures_1, temperatures_2);

    function compareTemps(arrayOfTemps1, arrayOfTemps2){

        let arrayOfTemps = arrayOfTemps1.concat(arrayOfTemps2);

        let min, max;
        if(arrayOfTemps.length >= 1){
            min = arrayOfTemps[0];
            max = arrayOfTemps[0];
        }

        for(let i = 0; i < arrayOfTemps.length; i++){
            // if(arrayOfTemps[i] === 'error')
            if(typeof arrayOfTemps[i] !== 'number' && !isNaN(arrayOfTemps[i]))
                continue;//skip

            if(arrayOfTemps[i] > max) max = arrayOfTemps[i];
            if(arrayOfTemps[i] < min) min = arrayOfTemps[i];

        }

        console.log(`min: ${min} max: ${max}`);

        return max - min;
    }
}