// Date (OBJECT)
// Base reference considered in JS - 01-Jan-1970
// Dates and times are calculated from this reference date, using miliseconds

let myDate = new Date();
console.log (typeof myDate);
console.log (myDate);
console.log (myDate.toString());
console.log (myDate.toDateString());
console.log (myDate.toLocaleString());
console.log (myDate.toJSON());

//let myCreatedDate = new Date (2023, 0, 23);
//let myCreatedDate = new Date (2023, 0, 23, 5, 3);
//let myCreatedDate = new Date ("2023-01-26");
let myCreatedDate = new Date ("01-26-2023");
console.log (myCreatedDate.toLocaleString());

let myTimeStamp = Date.now ()
console.log (myDate.getTime())
console.log (myTimeStamp)
console.log (Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log (newDate.getMonth());
console.log (newDate.toLocaleString());
newDate.toLocaleString ('default', {
        hourCycle: "h24"
});
console.log (newDate.toLocaleString());

