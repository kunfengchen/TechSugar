//
// skeleton copy&pasted from https://github.com/umputun/rt-bot/tree/master/sovet-bot
//
const express = require('express');
const bodyParser = require('body-parser');
// const rp = require('request-promise');	// //,"request-promise": "^4.1.1"

var kdate = require("./kdate.js");

var app = express(), port = 8080;

/*
{text: сообщение, username: id пользователя, display_name: имя пользователя} 
*/

app
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())

.get('/info', (req, res, next) => {
	res
	.status(200)
	.json({author: 'hcalendar bot', info: 'Hebrew Calendar', commands: ['hcalendar']})
	.end();
})
.get('/event', (req, res, next) => {
	res
	.json({name: 'hcalendar bot', version: '0.0.1'})
	.end();
})
.post('/event', (req, res, next) => {
	var msg = req.body;

	if (msg.text == "hcalendar")
	{
		var uDate = new Date();
		var tday = uDate.getDate();
		var tmonth = uDate.getMonth() + 1;
		var tyear = uDate.getFullYear();

		var hebDate = kdate.civ2heb_v1(tday, tmonth, tyear);
		var currentData = "currentData";
		var data = {text: currentData, bot: "hcalendar"};
		res
			.status(201)
			.json(data)
			.end();
	} else{
		res.sendStatus(417);
	}
	// if(/совет|грей|грэй|gray|как\sжить|подскажите|\?/i.test(msg.text)) {
	// 	rp('http://fucking-great-advice.ru/api/random')
	// 	.then(r => {
	// 		var sovet = 'Совета нет(';
	// 		try {
	// 			r = JSON.parse(r);
	// 			sovet = `##[Совет для: ${msg.username}] \`${r.text}\``;
	// 		} catch(e) {};

	// 		var data = {text: sovet, bot: "советчик"};

	// 		res
	// 		.status(201)
	// 		.json(data)
	// 		.end();

	// 	})
	// 	.catch(() => {
	// 		res.sendStatus(417);
	// 	});
	// } else {
	// 	 res.sendStatus(417);
	// }
});

var server = app.listen(port);

server.on('error', function() {
  console.log("Error connection");
});