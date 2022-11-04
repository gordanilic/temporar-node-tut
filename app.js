// u do it in terminal everything
//first u need to have package installed JSON in order to instal other packages bootstrap aso.
// when you instal modules(packages) u will become another ordner with name node_modules because dependecies co e there

// nmp -global comand, comes with node
// nmp --version

// local dependancy - use it only in this particulat project
// nmp i <packageName>

// global dependancy - use it in any project
// nmp install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package), 3 approaches to add JSON:
// manual approach (crate package,jso in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require("lodash"); // here you use instal lodash and you use it own methods like flattenDeep
const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
