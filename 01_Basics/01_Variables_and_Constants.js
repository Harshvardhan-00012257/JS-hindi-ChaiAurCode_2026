/* 
Background: 
        - Software revolve around data - how to fetch, efficiently-store, manipulate data within available memory
        - Variables are memory spaces allocated by program at runtime.
        - constants and Variables
        - Constants: Once declared, cannot be modified.
          Variables: Two ways to declare in JS, "let" and "var"
*/


/*
    Ways to declare variables in JS.
    "let" and "const" are always preferable
    "var" declarations struggles to respect scope (BLOCK, GLOBAL, FUNCTIONAL)
*/

const accountId = 11223344
// const accountId2;            // You cannot initialize a constant without any value
const accountId2 = undefined;        // However, you can initialize a constant with values like undefined, null etc.
let accountEmail = "BeeBom@gleeBom.com"
var accountPassword = "98238"
accountCity = "ShaniShingnapur"
let accountBalance

/*
accountId = 55667788            // You cannot reassign a const-variable, node throws error 
*/
accountEmail = "GleeBom@beeBom.com"
accountPassword = "5301"
accountCity = "Jaipur"


console.table([accountId, accountId2, accountEmail, accountPassword, accountCity, accountBalance])

accountCity = "Raipur"

console.table([accountId, accountId2, accountEmail, accountPassword, accountCity, accountBalance])

/*
    1. "var" variables have issues in differentiating GLOBAL-scope, BLOCK-scope and FUNCTIONAL-scope.
    2. Avoiding using "var" declarations.
    3. Also completely avoid declaring variables without its type i.e., let, cons, var etc. (It considers "var" by default (not sure though))
*/
