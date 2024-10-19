"use strict";

// Immediately Invoked Function Expressions (IIFEs)

// Closure
if(false){
    const counter = (function(){
        let count = 0;
        return {
            increment: function(){
                return ++count;
            },
            decrement: function(){
                return --count;
            },
            getCount: function(){
                return count;
            }
        };
    }());

    console.log(`${counter.increment()}`);
    console.log(`${counter.increment()}`);
    console.log(`${counter.getCount()}`);
    console.log(`${counter.decrement()}`);
    console.log(`${counter.getCount()}`);
}


// Random number generation
if(false){
    const randomInRange = (function(min, max){
        return Math.floor(Math.random() * (max - min + 1));
    }(1, 100));

    console.log(`${randomInRange}`);
}


// Unique id generation
// Closure
if(false){
    const unqiueId = (function(){
        let id = 0;

        return function(){
            return ++id;
        }
    }());
    console.log(`${unqiueId()}`);
    console.log(`${unqiueId()}`);
    console.log(`${unqiueId()}`);
}


// Shopping cart
// Closure
if(false){
    
    const shoppingCart = (function(){
        const cart = [];

        return {
            addItem: function(item){
                cart.push(item);
            },
            getItems: function(){
                return cart;
            },
            listItems: function(){
                for(let ind in cart){
                    console.log(`${cart[ind].name}`);
                }
                return `End of list`;
            },
            totalItems: function(){
                return cart.length;
            }
        }
    }());

    shoppingCart.addItem({name: `Apple`, price: 0.5});
    shoppingCart.addItem({name: `Banana`, price: 0.3});

    console.log(`${shoppingCart.listItems()}`);
}


// Simple task manager
if(false){

    const taskManager = (function(){
        const tasks = [];

        return {
            addTask: function(task){
                tasks.push(task);
            },
            popTask: function(){
                const i = tasks.length - 1;
                const task = tasks[i]; 
                tasks.splice(i, 1);
                return task;
            },
            totalTasks: function(){
                return tasks.length;
            },
            listTasks: function(){
                for(let ind in tasks){
                    console.log(`${tasks[ind]}`);
                }
                return `End of tasks`;
            }
        }
    }());

    taskManager.addTask('Get up');
    taskManager.addTask('Brush teeth');
    taskManager.addTask('Comb hair');

    console.log(`${taskManager.listTasks()}`);
    console.log(`pop: ${taskManager.popTask()}`);
    console.log(`${taskManager.listTasks()}`);
}