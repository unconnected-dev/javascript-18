
//Declaring calculateSquare function
function calculateSquare(number, callback) {
    setTimeout(function() {
        if (typeof number !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}

//There is not a delay of 1 second between logging each number
//The code just waits for 1 second then logs all numbers at once
if(false){
    //This is because we are not waiting, the function within is simply noted
    //to be executed after 1 second

    //All 3 lines of code are processed without delay and notes are made
    //to execute the 3 callbacks after 1 second from that specific moment
    calculateSquare(1, function(error, result){
        console.log(result);
    });
    calculateSquare(2, function(error, result){
        console.log(result);
    });
    calculateSquare(3, function(error, result){
        console.log(result);
    });
}

//Invoking calculateSquare function for numbers from 1 to 6 sequentially (one after another)
//This is an example of a callback hell
if(true){
    calculateSquare(1, function (error, result) {
        console.log(result);
        calculateSquare(2, function (error, result) {
            console.log(result);
            calculateSquare(3, function (error, result) {
                console.log(result);
                calculateSquare(4, function (error, result) {
                    console.log(result);
                    calculateSquare(5, function (error, result) {
                        console.log(result);
                        calculateSquare(6, function (error, result) {
                                console.log(result);
                        });
                    });
                });
            });
        });
    });
}