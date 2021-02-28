const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.length === 0) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      let result = arr.slice(0, i) + "," + arr.slice(i + 2);
      return result;
    } else if (arr[i] === '--discard-prev') {
      let result = arr.slice(0, i - 1) + "," + arr.slice(i + 1);
      return result;
    } else if (arr[i] === '--double-next') {
      let result = arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
      return result;
    } else if (arr[i] === '--double-prev') {
      let result = arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
      return result;
    }
  }
};
