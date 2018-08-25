/* eslint no-console: off */

'use strict';

class DB {
	constructor(db) {
		this.redis = db;
	}

	set(key, value) {
		console.log(key, value);
		this.redis.set(key, value);
	}

	get(key, cb) {
		this.redis.get(key, function (err, result) {
			cb(err, result);
		});
	}
}

module.exports = DB;
