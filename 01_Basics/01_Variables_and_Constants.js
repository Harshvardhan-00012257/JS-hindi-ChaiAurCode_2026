/*
    Ways to declare variables in JS.
    "let" and "const" are always preferable
    "var" declarations struggles to respect scope (BLOCK, GLOBAL, FUNCTIONAL)
*/

const accountId = 11223344
let accountEmail = "BeeBom@gleeBom.com"
var accountPassword = "98238"
accountCity = "ShaniShingnapur"
let accountBalance

/*
accountId = 55667788    // You cannot reassign a const-variable, node throws error 
*/
accountEmail = "GleeBom@beeBom.com"
accountPassword = "5301"
accountCity = "Jaipur"


console.table([accountId, accountEmail, accountPassword, accountCity, accountBalance])

accountCity = "Raipur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountBalance])

/*
    1. "var" variables have issues in differentiating GLOBAL-scope, BLOCK-scope and FUNCTIONAL-scope.
    2. Avoiding using "var" declarations.
    3. Also completely avoid declaring variables without its type i.e., let, cons, var etc. (It considers "var" by default (not sure though))
*/
