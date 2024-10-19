"use strict";

// General Call, Bind, Apply Practice

const bob = {
    firstName: `Bob`,
    lastName: `Bobson`,
    sex: `M`,
    getName: function(){
        return `${this.firstName} ${this.lastName}`; 
    }
}

const sue = {
    firstName: `Sue`,
    lastName: `Sueson`,
    sex: `F`,
}

const professionalName = function(){
    // Don't read too much into this line
    const title = this.sex === `M` ? `Mr` : `Mrs`;
    return `${title} ${this.firstName} ${this.lastName}`;
}

// Borrowing
if(false){
    console.log(`${bob.getName()}`);
    console.log(`${bob.getName.apply(sue)}`);
}


// Applying `this` to a function
if(false){
    console.log(`${professionalName.apply(bob)}`);
    console.log(`${professionalName.apply(sue)}`);
}