/**
 * author: Christian Gastelum
 */

/**
 * @method FizzBuzz(): print numbers from 1 to 100, 
 * if it is a multiple of 3 it prints "Fizz", 
 * if it is a multiple of 5 it prints "Buzz"
 * and if it is a multiple of both print "FizzBuzz".
 */



function FizzBuzz() {
    //cycle to generate numbers from 1 to 100
    for (number = 1; number <= 100; number++) {
        //check if it is a multiple of 3 and 5
        if (number % 3 == 0 && number % 5 == 0) {
            console.log("FizzBuzz");
        } 
        //check if it is a multiple of 3 
        else if (number % 3 == 0 ) {
            console.log("Fizz");
        }
        //check if it is a multiple of 5
         else if (number % 5 == 0) {
            console.log("Buzz");
        }
        else{
            console.log(number);
        }
    }
}


FizzBuzz();