"use strict";


import calculateSquare from '../calculate-square.js';//Import the function to be tested
import { describe, it } from 'mocha';//Import Mocha's describe and its functions for organizing testing
import { expect } from 'chai';//Import Chai's expect assertion library for writing assertions
import { assert } from 'chai';//Import Chai's assert library as an alternative for assertions (though not used in this example)


//The describe block is used to group related tests
//Here, we're grouping tests related to the calculateSquare function
describe('calculateSquare', function(){

    //The it block defines a single test case. This test case verifies 
    //that calculateSquare correctly squares a number
    it('should return 4 if passed 2', function(done){

        //Invoke calculateSquare with 2 and a callback function
        calculateSquare(2, function(error, result){
            expect(result).to.equal(4);//Use Chai's expect to assert that the result is 4
            done();//Call done() to signal that the test is complete. This is crucial for asynchronous tests
        });
    });


    //Another it block defines a test case to verify that calculateSquare 
    //returns an error when passed a non-number
    it('should return an error if passed a string', function(done){

        //Invoke calculateSquare with a string and a callback function
        calculateSquare('string', function(error, result){
            expect(error).to.not.equal(null);//Assert that an error was returned
            expect(error.message).to.equal('Argument of type number is expected');//Assert that the error message is correct
            done();//Call done() to signal that the test is complete
        });
    });
});