let name = "Bastien LE BRUN";
let campus = "WCS Reims";
var cowsay = require("cowsay");

const myInfos = () => {

console.log(cowsay.say({
	text : `My name is ${name}, I'm from ${campus}`,
	e : "oO",
	T : "U "
}));
}

module.exports = myInfos;
