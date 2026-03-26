/*
    - Simple comparison between datatypes is quite intuitive and easy.
    - The main focus hre is to learn behavior of JS in case of comparisons made among different data-types.
    - JS allows such comparisons without throwing any errors, however, the problem is that the results are usually not-predictable (or) data is rightfully comparable.
    - Hence, the results obtained in such circumstances are not reliable.
    - Therefore, the better w ay is to compare data with same-datatypes on (TYPESCRIPT behavior)
*/

// console.log (2 > 1);
// console.log (2 >= 1);
// console.log (2 < 1);
// console.log (2 <= 1);
// console.log (2 == 1);
// console.log (2 != 1);


/*
- The below mentioned are examples of comparison among different datatypes.
- JS implicitly converts datatypes, suitable for comparison.
- This implicit behavior is often unsafe, non-reliable and confusing.
- Avoid this...!!!
- Make logics simple by comapring data of same datatype
*/
console.log ("2" > 1);
console.log ("2" > false);
console.log ("2" > null);
console.log ("2" > undefined);
console.log ("02" > "02");
console.log ("02" == "02");
console.log ("02" == "01");
console.log ("----------********************************-----------")

/*
- NOTE:
        The behavior of comparisons operators (<, >, <=, >=)
        is slightly different than the behavior of equality check (==) in below ex.

        Comparisons convert "Null" to number-0
        Whereas, Equality check does not.
*/
console.log (null >= 0);
console.log (null <= 0);
console.log (null > 0);
console.log (null < 0);
console.log (null == 0);
console.log ("----------********************************-----------")
console.log (undefined >= 0);
console.log (undefined <= 0);
console.log (undefined > 0);
console.log (undefined < 0);
console.log (undefined == 0);
console.log ("----------********************************-----------")
/* Strict equality check */ // Checks datatype as well as value, if both match, only them TRUE.
console.log ("02" === 2);
