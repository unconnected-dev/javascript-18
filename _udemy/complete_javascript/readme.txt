https://www.udemy.com/course/the-complete-javascript-course/
https://github.com/jonasschmedtmann/complete-javascript-course
https://codingheroes.io/assignments/instructions.html



Hoisting
Hoisting in JavaScript allows variable declarations to be accessible before 
they are actually defined. It lifts the declarations to the top of their 
scope during the compilation phase, creating a new property in the 
Variable Environment Object for each declared variable. 

The main goal of hoisting is to allow function declarations to be accessible 
before they are defined. However, hoisting for variables (using `var`) 
is a byproduct of this behavior. 


Variable Environment Object
Part of the execution context in JavaScript. It is an internal structure that
stores the variables and their associated values within a specific scope (such
as a function or global scope).


Temporal Dead Zone (TDZ)
Refers to the period from the start of a variable's scope until it is declared.
Accessing the variable in this zone results in a ReferenceError.


Global Namespace Pollution
Global namespace pollution occurs when variables declared with `var` outside 
any function become properties of the global object. This can lead to
unintentional overwriting of global variables and conflicts between scripts.


Regular Functions
Regular functions n JavaScript are defined using the `function` keyword. They
can be either function declarations or expressions. Regular functions have 
their own `this` context, which is determined by how they are called.


Arrow Functions
Arrow functions were introduced in ES6. They are defined using the `=>` syntax.
Arrow functions do not have their own `this` context. Instead, they capture 
`this` from the surrounding code (lexical scope). They are useful to preserve 
the `this` value from the outer context, such as when defining methods in
objects or working with callbacks.


Scoping
Scope refers to the area of code where a variable is accessible.
JavaScript has: Global scope, function scope, block scope.
`let` and `const` are block-scoped (limited to {}). 
`var` is function-scoped and ignores block scope (limited to the closest
function).


Lexical Scoping
Scope is determined by the structure of the code (how blocks and functions
are nested). Variables declared in an outer scope are accessible in inner
scopes, but not vice-versa. Lexical scoping is static; it depends on code
placement, not function calls.


Scope Chain
The scope chain is the link between the current scope and all parent scopes.
It's created by the lexical nesting of blocks and functions. When a variable
isn't found in the current scope, JavaScript looks up the scope chain. This
is known as "variable lookup" and stops when the variable is found or no
more scopes exist.