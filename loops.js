var array = ["This", "is", "my", "array", "being", "looped"];

// create a for loop that iterates through the array
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// iterate through an array with the for-in loop
for(let index in array){
    console.log(array[index]);
}

// forEach performs an operation on each item in the array
array.forEach((item) => {
    console.log(item * 2);
});