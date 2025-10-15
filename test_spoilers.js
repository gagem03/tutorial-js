// typeof is a method built into JavaScript that returns data type
console.log(typeof(null));

// What does typeof(null) return? -> object

// How do you create a new object in JavaScript?
var object = { // curly braces mean object
    "name": "Todd",
    "age": 23
};

var obj2 = new Object; // another method to create an object

var obj3 = Object; // another method to create an object

// How many different ways? -> All of the above!

/* 
=== -> value AND data type
== -> value only
*/

/*
push() and pop() -> LIFO
shift() and unshift() -> FIFO *THERE WILL BE A QUESTION ON THESE!*
shift removes, unshift adds to first item in array
*/

/*
Async Operation
- database
- network
- process
- filesystem

Main thread read top down
*/

// JavaScript has built in error object

console.log(object);

function(url) async{
    try{
        var response = await fetch(url);
    }catch(error){
        console.log(`Something happened to the remote server: ${error}`);
    }
}

// math.random returns random number (float) between 0 and 1

// concat joins 2 arrays

// setTimeout() sets a delay

// Study methods (esp string, filter, find)
