'use strict';

const Redis = require('ioredis');
let redis;
class DB {

	constructor() {
		redis = new Redis();
	}

	set(key, value) {
		console.log(key, value);
		redis.set(key, value);
	}

	get(key, cb) {
		redis.get(key, function (err, result) {
			cb(result);
		});
	}

}

module.exports = DB;
