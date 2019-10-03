// module.exports.componentToHex = (c) => {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// };

// let componentToHex = module.exports.componentToHex;

module.exports.rgb = rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

module.exports.component = componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};


