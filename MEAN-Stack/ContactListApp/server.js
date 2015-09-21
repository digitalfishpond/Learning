var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function (req, res) {
	console.log('I received a get request');

	var person1 = {name: "Tim", email: "tim@company.com", number: "0208 9957 87 56"};
	var person2 = {name: "Andrea", email: "andrea@company.com", number: "0208 4578 84 75"};
	var person3 = {name: "Celine", email: "celine@company.com", number: "0208 5477 55 47"};

	var contactlist = [person1, person2, person3];

	res.json(contactlist);
});

app.listen(3000);
console.log("server running on port 3000");