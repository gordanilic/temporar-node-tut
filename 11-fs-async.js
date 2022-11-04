// ASYNCHRONOUS apprach
// it needs Callback like Callback function in JS, with CallBack is a liitle big code so it is better way to use promises and asinc-away approach
const { readFile, writeFile } = require("fs");
const { resourceLimits } = require("worker_threads");

console.log("start");
// first is err - error, second is result we need utf8 in the middle
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", `utf8`, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting the next task");
