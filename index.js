/**
 * Prints hello
 */
module.exports.sayHello = function () {
  console.log("Hello");
};

/**
 *  Adds two numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
module.exports.addNumbers = function (a, b) {
  return a + b;
};

module.exports.constant = { property: 12 };
