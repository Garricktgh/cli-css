const hex = require("./hex");
const rgb = require("./rgb");

let v1 = process.argv[2];
let v2 = process.argv[3];
let v3 = process.argv[4];
let v4 = process.argv[5];

console.log(process.argv);
if (v1 === "hex") {
  console.log(rgb[v1](v2));
} else if (v1 === "rgb") {
  console.log(hex[v1](parseInt(v2), parseInt(v3), parseInt(v4)));
}


// this special console will create colored output
console.log(`\x1b[38;2;${v2};${v3};${v4}m%s\x1b[0m`, "I am colored");