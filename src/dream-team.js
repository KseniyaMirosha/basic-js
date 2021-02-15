const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  
  arr = arr.map(el => el.trim());

  let firstLetters = arr.map(function (elem) {
    for (i = 0; i < arr.length; i++) {
      arr[i].toUpperCase() + arr.slice(1);
      return (elem[i][0].toUpperCase());
    }
  });
  let result = firstLetters.sort().join("");
  return result;
};
