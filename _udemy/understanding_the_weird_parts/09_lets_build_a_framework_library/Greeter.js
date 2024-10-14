// Wrapping everything inside an Immediately Invoked Function Expression (IIFE)
// This ensures Greetr is in its own scope and doesn't pollute the global scope.
;(function(global, $){

    // Greetr is a constructor function (used to create new objects).
    // It returns a new instance of Greetr.init (defined below).
    var Greetr = function(firstName, lastName, language) {
        // 'new Greetr.init()' creates a new object with methods and properties.
        return new Greetr.init(firstName, lastName, language);
    }

    // Variables that are not exposed (kept private).
    // These variables are hidden unless explicitly exposed to developers.
    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }


    // Adding methods to Greetr's prototype.
    // These methods will be shared by all instances of Greetr.
    Greetr.prototype = {

        // Returns the full name by combining first and last name.
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        },

        // Validates if the provided language is supported.
        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'Invalid language';
            }
        },

        // Returns a casual greeting based on the selected language.
        greeting: function() {
            return `${greetings[this.language]} ${this.firstName}`;
        },
        
        // Returns a formal greeting based on the selected language.
        formalGreeting: function() {
            return `${formalGreetings[this.language]} ${this.fullName()}`;
        },

        // Greets the user either formally or casually based on the input.
        greet: function(formal) {
            var msg;

            // If 'formal' is undefined or null, it will default to casual.
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object, enabling method chaining.
            return this;
        },

        // Logs a message to the console with the user's full name and language.
        log: function() {
            if (console) {
                console.log(`${logMessages[this.language]}: ${this.fullName()}`);
            }

            return this;
        },

        // Sets the language and validates it. Method is chainable.
        setLang: function(lang) {
            this.language = lang;
            this.validate();

            return this;
        },

        // Updates the HTML content of a selected element with a greeting message.
        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // Updates the HTML content of the selected element with the message.
            $(selector).html(msg);

            return this;
        }
    };

    
    // Greetr.init is the actual function that initializes (sets up) the object.
    // Think of this as the constructor for Greetr objects.
    Greetr.init = function(firstName, lastName, language) {
        var self = this; // 'self' ensures we refer to the current object ('this').
        
        // Set object properties or default them if no values are passed.
        self.firstName = firstName || '';  // Default to empty string if not provided.
        self.lastName = lastName || '';    // Default to empty string if not provided.
        self.language = language || 'en';  // Default to 'en' if no language provided.

        // Validate the provided language during initialization.
        self.validate();
    }

    // Linking Greetr.init's prototype to Greetr.prototype.
    // This ensures instances of Greetr.init can access methods from Greetr.prototype.
    Greetr.init.prototype = Greetr.prototype;

    // Exposing Greetr to the global object (window in the browser).
    // Allows Greetr or G$ to be accessed globally for creating Greetr instances.
    global.Greetr = global.G$ = Greetr;

}(window, jQuery)); // 'global' refers to the window object, '$' refers to jQuery.