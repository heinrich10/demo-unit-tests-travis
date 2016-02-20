'use strict';

const scraper = require('./lib/scraper');
const db = require('./lib/db');
const Redis = require('ioredis');
const redis = new Redis();
const DB = new db(redis);

scraper(function (err, temp) {
	console.log('this is from the scraper', temp);
	DB.set('temp', temp);

	DB.get('temp', function (error, result) {
		console.log('this is from the db', result);
	});
});
