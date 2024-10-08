https://www.udemy.com/course/javascript-understanding-es6-and-beyond/
https://github.com/AnthonyPAlicea/es6



Block Scoping with let and const
Variables declared with let and const have block scope, meaning they are
only accessible within the block (e.g., {}) they are declared in. let and
const are not hoisted to the top of their block like var, so they cannot be
accessed before their declaration

Variable scope in JavaScript is defined lexically by a block, typically using 
curly braces.


Lexical environments
A Lexical Environment is a structure that holds identifier-variable mappings 
(where the identifier is the variable name). It consists of two components: 
    - the environment record (which stores the actual variable bindings)
    - a reference to the outer environment (which allows for lexical scoping)

A new lexical environment is created with each block. In ES6, variables declared
with `let` and `const` are block-scoped, meaning they are only accessible 
within the block they are defined in.


Variable Environment
The Variable Environment is similar to the Lexical Environment but is 
specifically used for function scopes. For block-scoped variables (`let` and 
`const`), these are stored in the Lexical Environment, while `var` variables 
are stored in the Variable Environment.


Temporal Dead Zone (TDZ)
The time between entering the block and the actual initialization of let and
const variables. Accessing these variables during the TDZ results in a
ReferenceError.


Switch Case Scoping
Each case in a switch statement can have its own block scope to avoid 
variable name conflicts.


Variable Shadowing
When a variable is declared inside a block or loop with the same name as an
outer variable, the inner declaration shadows the outer one within that scope.


Immutable Binding
The primary difference between const and let is that const ensures 
the variable binding is immutable, meaning the reference to the value 
cannot be changed once set.


Mutable Values
If a const variable points to an object or array, the contents of that 
object or array can still be modified. The immutability applies only 
to the variable's binding, not the value it holds.