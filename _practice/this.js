'use strict';

//General `this` Practice

if(false){
    // `this` is the global object
    // but in strict mode, `undefined`
    console.log(this);

    // `this` will be undefined due to being inside a function
    function a(){
        console.log(this);
    }
    a();

    console.log(this.name)
}


if(false){
    let myObject = {
        name: 'bob',
        
        callMe: function(){
            console.log(`Call me ${this.name}`);
        },

        // will not work with `this` inside function
        cantCallMe: function(){

            // `this` is not myObject
            // refers to `undefined` in strict mode
            var setName = function(newName) {
                this.name = newName;
            }
            // setName('Tom');
        },
        
        // use `self` to bypass `this` issue via the scope chain
        canCallMe: function(){
            let self = this;
            var setName = function(newName) {
                self.name = newName;
            }
            setName('Tom');
            this.callMe();
        },

        // can use arrow functions as they have `this` of the surrounding context
        canAlsoCallMe: function(){
            const setName = (newName) => {
                this.name = newName;
            }
            setName('John');
            this.callMe();
        }
    }

    myObject.callMe();
    myObject.cantCallMe();
    myObject.canCallMe();
    myObject.canAlsoCallMe();
}


if(false){
    let myObject = {
        testname: "test",
        self: this,

        callme: function(){
            console.log(this);

            function subcall(self){
                console.log(`subcall: ${this}`);
                console.log(`subcall: ${self}`);
            }

            let othercall = function(self){
                console.log(`othercall: ${this}`);
                console.log(`othercall: ${self}`);
            }

            subcall(this);
            othercall(this);
        }
    }

    myObject.callme();
}