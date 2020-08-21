// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";s

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
nestedFunction can access internal because when nested function was declared it created functional scope and internal is within that functional scope which means its reaching inward for it.. they cant reach outward and pull but they can get fronm within 


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
const summation = function(max)
const answer = 0
for(let i = 1; i <= max; i++); {
  answer += i;
  
  return answer
}
