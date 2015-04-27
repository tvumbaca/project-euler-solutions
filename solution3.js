// This is my solution to promblem 3 on ProjectEuler.net.
// It finds the largest prime factor of the number 600851475143.

// I used a solution by Ray Delgado posted on Codecademy.com for help 
// writing the code to find prime numbers - (http://www.codecademy.com/forum_questions/5033d10f77955e0002004142) - Thanks!!

// i is the prime number variable
// j is the variable used for finding/checking primes

for (i=2; i<=600851475143; i++) // loop to seach for prime numbers.
{
    var prime=true; // sets boolean for "prime" to true.

    // this next for loop checks each number or the previous for loop to see if it is prime.
    // if it can be divided evenly then it sets "prime" to false, ending the loop and moving on to the next number to be checked.
    for (j=2; j<=Math.sqrt(i); j++) {  // this for loop checks each number 
        if (i%j===0) {
            var prime=false;
            }
        }

    // "prime" is still true, and each prime number is then checked to see if it a prime factor.
    // Each prime factor is then logged to the console.
    if (prime && (600851475143 % i === 0)){
        console.log(i);
        }
}