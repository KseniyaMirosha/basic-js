const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
		let currentYear = date.getFullYear();
    if (!date) {
      return null;
    }
		if (date < new Date(currentYear, 2, 1)) {
			// [Jan 1 ~ Mar 1)
			return 'winter';
		}
		if (date < new Date(currentYear, 5, 1)) {
			// [Mar 1 ~ Jun 1)
			return 'spring';
		}
		if (date < new Date(currentYear, 8, 1)) {
			// [Jun 1 ~ Sep 1)
			return 'summer';
		}
		if (date < new Date(currentYear, 11, 1)) {
			// [Sep 1 ~ Dec 1)
			return 'autumn';
		}
		// [Dec 1 ~ Dec 31]
		return 'winter';
};
