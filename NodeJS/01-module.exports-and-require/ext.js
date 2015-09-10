var Hello = {

	en: "Hello",
	sp: "Hola",
	fr: "Bonjour"

}

console.log("this will run anyway if require(ext.js) is called from anywhere")

var exports = module.exports = {}
exports.en = Hello.en;
exports.fr = Hello.fr;
