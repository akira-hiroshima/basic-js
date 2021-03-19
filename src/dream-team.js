const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (Array.isArray(members)){
	members = members.map(function(name){
		if (typeof name !== 'string') {return }
		name = name.trim();
		name = name.toLowerCase();
		name = name[0];
		return name;
	})
	return members.sort().join("").toUpperCase(); 
	}
	else
	return false;
};
