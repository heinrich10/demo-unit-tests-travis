'use strict';

const request = require('request');

// please don't keep on using this appid. openweathermap might get angry at us.
// please create your own account to use for this.
const url = 'http://api.openweathermap.org/data/2.5/weather?q=hongkong&appid=44db6a862fba0b067b1930da0d769e98';

module.exports = function (cb) {
	request.get(url, function (err, response, body) {
		if (err) {
			return cb(err);
		}
		if (response.statusCode >= 400) {
			return cb(new Error('Server returned ' + response.statusCode));
		}

		const weather_report = JSON.parse(body);
		const temp1 = weather_report.main.temp - 273;
		return cb(null, temp1);
	});
};
