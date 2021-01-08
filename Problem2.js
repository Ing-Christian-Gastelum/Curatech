/**
 * author: Christian Gastelum
 */
/**
 * @method countingValleys(steps, path) : method for counting valleys through a route defined in a character string "D" going down and "U" going up above sea level.
 * @param {int} steps number of steps of the route.
 * @param {string} path character string to define the path.
 */


function countingValleys(steps, path){
    //variable to indicate the level, it is initialized with 0 to indicate sea level
    var level=0;
    //valley count variable
    var count=0;
    //cycle for route chain tour
    for(i=0;i<steps;i++){
      //check if the path is down
      if(path.charAt(i)=="D"){
        //go down a level
        level--;
      }
      //check if the path is up
      if(path.charAt(i)=="U"){
        //go up a level
        level++;
        //Check if it is at sea level
        if(level==0){
          //count a valley
            count++;
        } 
    }
    
    }
    //returns value of how many valleys traveled on the route
    return count;
}




var step;
var path;
//Test 1
step=8;
path="UDDDUDUU";
console.log(countingValleys(step,path));
//Test 2
step=12;
path="DDUUDDUDUUUD";
console.log(countingValleys(step,path));
