const util = require("util");

// Morgan
util.log("Sample Text");

let name = "John Doe";
let amount = 199;

// Template Literal 
console.log(util.format("%s has %d dollors with him.", name, amount));


// JavaScript
console.log(util.isArray([]))
console.log(util.isArray({}))