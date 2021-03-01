const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNumber = 2 ** disksNumber - 1;
  let secondsNumber = Math.floor(turnsNumber * 3600 / turnsSpeed);
  let solution = {
    turns: turnsNumber,
    seconds: secondsNumber
  };
  return solution;
};
