'use strict';

const scraper = require('./scraper');

scraper(function (err, temp) {
	console.log(temp);
});
