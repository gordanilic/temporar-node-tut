// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-names"); //two levels up .. three levels ... you come to your file with require
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavour");
console.log(data);
require("./07-mine-granate"); //the fourth way is just to write what u require and it would be invoked because the code for invoke is already in "./07-mine-granate", even thouth we didnt assign it to variable or we didnt invoke that variable
sayHi("Anna");
sayHi(names.john); //access it
sayHi(names.peter); //access it
