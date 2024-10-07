"use strict";



// 'use strict' in JavaScript
// It can be placed at the top of a file or inside a specific function.
// It is an opt-in feature that enforces stricter parsing and error handling.
// Different JavaScript engines may handle 'strict mode' slightly differently,
// so it can't be 100% relied on for consistency across all environments.

if (false) {
    var person;
    persom = {}; // Note the typo
    
    // JavaScript will implicitly create 'persom' as a global variable.
    // 'use strict' would catch this mistake and throw a reference error.
    console.log(`person: ${person}`);  
    console.log(`persom: ${persom}`);  
}

if (false) {
    function logNewPerson() {
        // Strict mode applied only to this function scope.
        "use strict"; 

        var person2;
        persom2 = {};  //Note the typo
        
        // In strict mode, this typo ('persom2' instead of 'person2') 
        // would throw a ReferenceError because 'persom2' has not been declared.
        // This helps catch accidental global variable creation or undeclared variables.
        console.log(`person2: ${person2}`);
    }
    logNewPerson();
}