const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string') { return false; }
	if (sampleActivity >= 15 || sampleActivity <= 0 || isNaN(+sampleActivity) == 1) { return false; } 
	let N = MODERN_ACTIVITY/sampleActivity;
	let k = 0.693/HALF_LIFE_PERIOD;
	let t = Math.log(N)/k;
	return Math.ceil(t);
};
