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


Interpolation 
Interpolation is the process of embedding or inserting variables or 
expressions into a string. 


Template Strings (Template Literals)
Template strings (or template literals) in JavaScript make interpolation 
straightforward, allowing you to inject values directly into a string 
without the need for concatenation.


Expression Interpolation
You can embed variables or any valid JavaScript expressions directly 
within a template string using ${}.


Tagged Templates
A more advanced form of template strings where you can process and manipulate
the interpolated values and literal strings. The tagged function receives an
array of the literal parts of the template string and the interpolated values
as arguments.


Syntactic Sugar
The term "syntactic sugar" refers to a feature that makes code easier to 
read and write, but doesn't add new functionality to the language. JavaScript
classes are syntactic sugar over the prototype-based inheritance system that
has always existed in the language. Under the hood, a class in JavaScript is 
still just a special kind of function that sets up the prototype chain in a 
more intuitive way.


Field
A field in JavaScript is a property that is created using the field syntax
directly within a class. Fields are similar to properties, but the term "field"
specifically refers to properties defined inside a class using the new syntax.


Public Instance Fields
Public instance fields are properties that are created on each instance of
the class. Unlike traditional properties, which are usually initialized in the 
constructor, public instance fields can be defined and initialized directly in 
the class body.


Constructor Function
The `constructor` is a special method in a class that is called when a new 
instance of the class is created.


Prototype
Every JavaScript function (including classes) has a `prototype` property. The
`prototype` is an object that is shared among all instances of a class or 
constructor function. Methods defined on the `prototype` are accessible to all
instances, enabling efficient sharing of methods and properties.


Prototype Chain
When an object is created from a class, it internally links to the class's 
`prototype` object. This link forms the prototype chain, where if a property or
method is not found on the instance itself, JavaScript looks up the chain to 
the prototype.


Prototype Inheritance
Objects in JavaScript inherit properties and methods from their prototype. If
a method or property is not found directly on an object, JavaScript will search
up the prototype chain. This allows for shared functionality between instances 
without duplicating code in each instance.