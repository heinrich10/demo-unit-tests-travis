'use strict';

const scraper = require('./lib/scraper');
const db = require('./lib/db');

const DB = new db();

scraper(function (err, temp) {
	console.log('this is from the scraper', temp);
	DB.set('temp', temp);

	DB.get('temp', function (result) {
		console.log('this is from the db', result);
	});
});
