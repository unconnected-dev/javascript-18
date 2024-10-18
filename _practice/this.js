'use strict';

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

if(true){
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
        }
    }

    myObject.callMe();
    myObject.cantCallMe();
    myObject.canCallMe();
}