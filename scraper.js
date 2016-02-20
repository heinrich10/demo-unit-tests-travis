'use strict';

const request = require('request');
const Redis = require('ioredis');
const redis = new Redis();

let url = 'http://api.openweathermap.org/data/2.5/weather?q=hongkong&appid=44db6a862fba0b067b1930da0d769e98';

module.exports = function (cb) {
	request(url, function (err, response, body) {
		if (err) {
			cb(err);
		}
		if (response.statusCode >= 400) {
			cb(new Error('Server returned ' + response.statusCode));
		}

		let weather_report = JSON.parse(body);

		let temp1 = weather_report.main.temp - 273;

		redis.set('temp', temp1);
		console.log('data saved to redis');
		console.log(new Date(weather_report.dt * 1000), 'the temperature now is:', temp1);
		redis.get('temp').then(function (result) {
			cb(null, temp1);
		});
	});
};
