'use strict';

// General Class Practice

//Wanted to check if instanceFields and properties had any meaningful difference
if(false){
    class myObject {
        instanceField = `instanceField`;

        constructor(){
            this.prop = `prop`;
        }

        test() {
            console.log(`instanceField: ${this.instanceField}`);
            console.log(`prop: ${this.prop}`);
        }
    }

    let test = new myObject();
    test.test();
    test.instanceField = `john`;
    test.prop = `doe`;
    test.test();
}