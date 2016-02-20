'use strict';

const chai = require('chai');
const expect = chai.expect;
const db = require('../lib/db');

describe('Temperature Scrapper', function () {
	describe('Test db.set', function () {
		it('Should save to the DB', function () {
			let DB = new db();
			DB.set('test', 'value');
		});
	});
	describe('Test db.get', function () {
		it('Should get from the DB', function (done) {
			let DB = new db();
			DB.get('test', function (err, result) {
				console.log(result);
				console.log(err);
				done();
			});
		});
	});
});
