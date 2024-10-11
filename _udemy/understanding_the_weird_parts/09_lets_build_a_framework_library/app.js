if(false){
    //gets a new object (the architecure allows us to not have to use the 'new' keyword here)
    var g = G$('John', 'Doe');
    console.log(`greeter: ${g}`);
    //use chainable methods
    console.log(`greet: ${g.greet().setlang(`es`).greet(true)}`);
}

//use object on the click of the login button
$('#login').click(function(){

    //create a new 'Greetr' object
    var loginGrtr = G$('John', 'Doe');

    //hide the login on the screen
    $('#logindiv').hide();

    //fire off HTML greeting, passing the '#greeting' as the selector and the chosen language
    //and log the welcome as well
    loginGrtr.setlang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});