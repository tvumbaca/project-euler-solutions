// This is my solution to promblem 1 on ProjectEuler.net.
// It finds the sum of all the multiples of 3 or 5 below 1000.


// Sets the variable "sum" that will be used to add up the multiples of 3 or 5.
var sum = 0;

// This is the for loop that will cycle through all numbers below 1000.
// Then looks to see if each number is a multiple of 3 or 5. 
// If so, it adds it to "sum" and continues looping until reaching 1000.
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(sum);