//thys is SYNCHRONOUS apprach
//it is a method  or to read from external file with method readFileSync to write on external file means to create from here new file woth method writeFileSync
const { readFileSync, writeFileSync } = require("fs");
// it is the same as:
// const fs = require("fs");
// fs.readFileSync();
console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
); //first Param is pfaad name and file name, second Param is what is inside(value)

// with node app in Terminal u become a new txt file with content in it, and if there is no such a file node will create it, if there is a file node will overwrite it

console.log("done with this task");
console.log("starting the next task");
