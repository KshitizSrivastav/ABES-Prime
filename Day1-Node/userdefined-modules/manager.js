const obj = require('./team1.js');
console.log(
    `Profit: ${obj.profit}, Expenses: ${obj.expenses}, Revenue: ${obj.revenue}`
)
const {sum} = require('./team2.js');
const s1 = sum(34);
const res = sum(12,3);
console.log(s1,res);

/*
what happens when we require() a module?
1. Resolving and loading the module
2. Wrapping the module 
3. Execution
4. Returning the exports object
5. Caching the module
*/

/*
---------------------------------------------------------------------------------------------------------------------
IIFE stands for Immediately Invoked Function Expression. It's a JavaScript pattern where a function 
is defined and executed immediately after its declaration, creating a private scope for variables and
preventing global pollution.
An IIFE combines the definition of a function with its immediate execution.
Private Scope:
IIFEs create a private scope for variables, meaning variables declared within the IIFE are not accessible
 from outside the function.
Avoiding Global Pollution:
This helps prevent naming conflicts and keeps the global scope clean by encapsulating code within the 
IIFE's scope.
----------------------------------------------------------------------------------------------------------------------
*/
