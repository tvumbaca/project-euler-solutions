// This is my solution to promblem 2 on ProjectEuler.net.
// It lists the terms of Fibonacci sequence whose values do not 
// exceed four million, then finds the sum of the even-valued terms.

// I had issues getting this to work at first but used Mateusz Staszczyk's solution
// as a guide to help me along - (https://github.com/sleaz0id/Odin-Eulers-Problems) - Thanks!!

// sets up the variables, a and b are used to start the sequence, fib is the resulting Fibonacci term.
var a = 0;
var b = 1;
var fib;
var sum = 0;

// using a while loop to find all the Fibonacci terms below 4 million.
while (a+b < 4000000) {  // Tricky part here was getting the loop to end before reaching the 4 million limit (using a+b was what worked)
    fib = a + b;
    a = b;
    b = fib;
    
    if (fib % 2 === 0) {  // find just the even Fibonacci terms and add those to the sum.
        sum += fib;
        console.log(fib);  // logged each term so I could test if it went over the 4 million limit.
        }
};

console.log(sum);