'use strict';


// Destructuring
// It allows you to unpack values from arrays or properties from objects into
// distinct variables.

// Array Destructuring
if(false){
    const arr = [2, 3, 4];
    const [x, y, z] = arr;
    console.log(x, y, z);
}

// Skipping elements during destructuring
// Use commas , , to skip an element in the array
if(false){
    const [first, , third] = restaurant.categories;
    console.log(first, third);
}

// Destructuring assigns values in order
if(false){
    let [main, secondary] = restaurant.categories;
    console.log(main, secondary);
}


// Don't swap variables using a temporary variable (old-fashioned way)
if(false){
    const temp = main;
    main       = secondary;
    secondary  = temp;
    console.log(main, secondary);
}

// Swap variables using array destructuring (modern approach)
if(false){
    [main, secondary] = [secondary, main];
    console.log(main, secondary);
}


// Destructuring function return values
// restaurant.order() returns an array with 2 elements
if(false){
    console.log(restaurant.order(2, 0));
    const [starter, main] = restaurant.order(2, 0);
    console.log(starter, main);
}


// Nested array destructuring 
if(false){
    let nested = [2, 4, [5, 6]];
    const [i, ,j] = nested;                 // Skips the second element and extracts the first and third
    console.log(`i: ${i}, j: ${j}`);             

    nested[2][0] = 1;                       // Proves that nested arrays are shallow copies (references)
    console.log(`i: ${i}, j: ${j}`);        // i: 2, j still points to the same array
    console.log(nested);      
}

// Destructuring nested elements within arrays
if(false){
    const [x, , [y, z]] = nested;           // Destructures the inner array
    console.log(x, y, z);
}

// Setting default values during destructuring
if(false){
    const [p = 1, q = 1, r = 1] = [8, 9];   // r is missing, so it defaults to 1
    console.log(p, q, r);                   // 8, 9, 1
}



// Destructuring objects
// The variable names must match the object properties.
// The order of elements does not matter so you don't need , , like with
// arrays. This is useful for API calls.
if(false){
    const { name, openingHours, categories } = restaurant;
    console.log(name, openingHours, categories);
}

// Renaming variables while destructuring
// This is useful for API data breakdowns.
if(false){
    const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
    console.log(restaurantName, hours, tags);
}

// Setting default values in object destructuring
// If a property doesn't exist, the default value is used.
if(false){
    const { menu = [], starterMenu: starters = [] } = restaurant;
    console.log(menu, starters);
}

// Mutating (changing) variables through destructuring
if(true){
    let a = 111;
    let b = 999;
    const obj = { a: 23, b: 7, c: 14 };       // Object with properties a, b, c

    // Destructure and reassign a and b from the object.
    // Use parentheses to avoid JavaScript's confusion with code blocks when
    // starting with {}.
    ({ a, b } = obj);
    console.log(a, b);                      // Logs: 23, 7 (a and b are overwritten)
}


// Destructuring nested objects
if(false){
    const { openingHours }  = restaurant;
    const { fri }           = openingHours;         // Object
    console.log(fri);

    const { fri: { open, close } } = openingHours;   // Destructures nested properties (open and close)
    console.log(open, close);
}



// Passing objects as function arguments and destructuring them
// This is useful when you want to avoid memorizing the parameter order.
if(false){
    restaurant.orderDelivery({
      time: '22:30',
      address: 'Via del Sole 21',
      mainIndex: 2,
      starterIndex: 2
    });
}