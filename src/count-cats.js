const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
	let counter = 0;
	for(i=0;i<arr.length;i++)
	{
		for(j=0;j<arr[i].length;j++)
		{
			if (arr[i][j] == '^^') 
			{
				counter++;
			}
		}
	}
  return counter;
};
