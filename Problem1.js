/**
 *author: Christian Gastelum
 */
/**
 * @method MilkMerchant(n, ar): method to obtain the number of pairs within an array, returns a numeric value.
 * @param {int}  n is the number of the size of the array and must be in a range from 1 to 100.
 * @param {Object[]} ar is the array data with values from 1 to 100, length must be equal to "n"
 */


function MilkMerchant(n, ar) {
    //partner count variable
    var count = 0;
    //array to store data from "ar" path
    var stock = []
    //valid range from 1 to 100 in "n"
    if (n >= 1 && n <= 100) {
        //Validate that n and the length of ar are equal
        if (n == ar.length) {
            //ar data walk
            for (i = 0; i < n; i++) {
                //valid range from 1 to 100 in "ar[i]"
                if (ar[i] >= 1 && ar[i] <= 100) {
                    /**
                     * Check if the data is not in stock. 
                     * If the data is found, it counts it and removes 
                     * it from the stock and counts it as a pair, if 
                     * it does not add it to the stock
                     */
                    if (stock.indexOf(ar[i]) != -1) {
                        //Search index to delete
                        var del = stock.indexOf(ar[i]);
                        //delete from stock
                        stock.splice(del, 1);
                        //counts as a pair
                        count++;
                    } else {
                        //push the current value of ar [i] to stock
                        stock.push(ar[i]);
                    }
                } else {
                    throw "numbers from 1 to 100 are accepted!!";
                }
            }
        } else {
            throw "different number to shim length";
        }
    } else {
        throw "numbers from 1 to 100 are accepted!!";
    }
    //returns number of pairs found in the array
    return count;
}


var n;
var ar;
//Test 1
n = 9;
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(MilkMerchant(n, ar));
//Test 2
n = 20;
ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5];
console.log(MilkMerchant(n, ar));