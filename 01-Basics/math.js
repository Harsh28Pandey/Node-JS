//? modules in node js

//? using single export
// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// module.exports = {
//     addFn: add,
//     subFn: sub
// };


//? using multiple exports
exports.add = (a, b) => a + b;

exports.sub = (a, b) => a - b;