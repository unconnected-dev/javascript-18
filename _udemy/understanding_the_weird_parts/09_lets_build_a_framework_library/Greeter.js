
// Wrapping everything inside an Immediately Invoked Function Expression (IIFE)
// This ensures that Greetr is in its own scope and doesn't pollute the global scope.
;(function(global, $){

    // Greetr function is a constructor function (a special kind of function to create objects)
    // It returns a new instance of Greetr.init (see below for explanation on 'init')
    var Greetr = function(firstName, lastName, language){
        // 'new Greetr.init()' creates a new object with Greetr's methods and properties
        return new Greetr.init(firstName, lastName, language);
    }


    //variables not exposed / hidden from develpers
    //unless exposed to the developers, these could not be changed?
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: `Hello`,
        es: `Hola`
    };

    var formalGreetings = {
        en: `Greetings`,
        es: `Saludos`
    };

    var logMessages = {
        en: `Logged in`,
        es: `Inicio sesion`
    }

    // Adding methods to Greetr's prototype. 
    // This object will hold any methods that we want all Greetr instances to share.
    Greetr.prototype = {

        fullName: function(){
            return `${this.firstName} ${this.lastName}`;
        },

        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1){
                throw `Invalid language`;
            }
        },

        greeting: function(){
            return `${greetings[this.language]} ${this.firstName}`;
        },
        
        formalGreeting: function(){
            return `${formalGreetings[this.language]} ${this.fullName()}`;
        },

        greet: function(formal){
            var msg;

            //if undefined or null it will be coerved to 'false'
            if(formal){
                msg = this.formalGreeting();
            } else{
                msg = this.greeting();
            }

            if(console){
                console.log(`${msg}`);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function(){
            if(console){
                console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            }

            return this;
        },

        setLang: function(lang){
            this.language = lang;
            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal){
            if(!$){
                throw `jQuery not loaded`;
            }

            if(!selector){
                throw `Missing jQuery selector`;
            }

            var msg;
            if(formal){
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    // Greetr.init is the actual function that initializes (sets up) the object.
    // Think of it as the constructor function for the Greetr object.
    Greetr.init = function(firstName, lastName, language){
        var self = this; // self is often used to keep the correct reference to 'this'
        // 'this' refers to the object being created (the new Greetr object)
        
        // Assign values to the object's properties or default them if not provided
        self.firstName = firstName || '';  // Default to an empty string if firstName is not provided
        self.lastName = lastName || '';    // Default to an empty string if lastName is not provided
        self.language = language || 'en';  // Default to 'en' (English) if language is not provided

        self.validate();
    }

    // Linking Greetr.init's prototype to Greetr's prototype.
    // This means any object created by Greetr.init will have access to methods defined on Greetr.prototype.
    Greetr.init.prototype = Greetr.prototype;

    // Exposing Greetr to the global object (window in a browser).
    // This allows it to be accessed from anywhere using either Greetr or G$.
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));  // 'global' refers to the window object, '$' refers to jQuery