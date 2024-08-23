"use strict";


import calculateSquare from '../calculate-square.js';//Import the function to be tested
import { describe, it } from 'mocha';//Import Mocha's describe and its functions for organizing testing
import { expect } from 'chai';//Import Chai's expect assertion library for writing assertions
import { assert } from 'chai';//Import Chai's assert library as an alternative for assertions (though not used in this example)
import chaiAsPromised from 'chai-as-promised';//Import Chai's promise library. It allows you to use Chai's `expect` or `should`
                                              //assertions directly on promises

chai.use(chaiAsPromised);


//This block of tests uses Mocha and Chai to test the calculateSquare function
//It tests the function's ability to handle promises, both when resolving and rejecting

//The describe block defines a suite of tests for the calculateSquare function
if(false){
    describe('calculateSquare', function(){
        //Optional: Set a timeout for all tests within this describe block
        //Mocha's default timeout is 2 seconds. It can be extended as shown below
        //this.timeout(4000);
        
        //This test checks if calculateSquare correctly resolves with the value 4 when passed 2
        //The test uses Chai's expect and chai-as-promised to handle promise assertions
        it('should resolve with 4 if passed 2', function(){
            this.timeout(4000);//Extend timeout for this specific test case
            return expect(calculateSquare(2)).to.eventually.equal(4);
        });
       
        // This test verifies that the promise is fulfilled when the input is a number
        it('should become fulfilled when passed number 2', function(){
            this.timeout(4000);
            return expect(calculateSquare(2)).to.be.fulfilled;
        });

        //This test ensures that the promise is rejected when the input is a string instead of a number
        it('should become rejected if passed a string instead of a number', function(){
            this.timeout(4000);
            return expect(calculateSquare('string')).to.be.rejected;
        });
    });
}


//This block demonstrates an alternative way to handle asynchronous testing using done()
//The done() function is called when the test completes, useful when return statements can't be used
//If notify or return are not used, then the test will always be pass
if(false){
    describe('calculateSquare', function(){
        it('should resolve with 4 if passed 2', function(done){
            expect(calculateSquare(2)).to.eventually.equal(4).notify(done);
        });

        it('should become fulfilled when passed number 2', function(done){
            expect(calculateSquare(2)).to.be.fulfilled.notify(done);
        });

        it('should become rejected if passed a string instead of a number', function(done){
            expect(calculateSquare('string')).to.be.rejected.notify(done);
        });
    });
}


//This block tests multiple assertions within a single test
//It checks that the result is both above 3 and equal to 4 for the input 2
//It also verifies that an error is correctly handled when a string is passed
if(true){
    describe('calculateSquare', function(){
        
        //This test case performs multiple assertions on the resolved value
        //It checks if the result is greater than 3 and equal to 4 when passed 2
        it('should resolve with 4 if passed 2', function(){
            return calculateSquare(2).then(result => {
                expect(result).to.be.above(3);
                expect(result).to.be.equal(4);
            });
        });

        //This test case checks that the function rejects when passed an invalid argument (a string)
        //It also asserts that the error message is not null and matches the expected error
        it('should return rejected promise if passed a string instead of a number', function(){
            return calculateSquare(2).catch(reason => {
                expect(reason).to.not.be(null);
                expect(reason).to.equal.apply('Argument of type number is expected')
            });
        });
    });
}