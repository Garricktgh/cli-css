const hex = require("./hex");
const rgb = require("./rgb");

console.log(process.argv);
console.log(rgb.hexToRgb(process.argv[2]));
console.log(hex.rgbToHex(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4])));