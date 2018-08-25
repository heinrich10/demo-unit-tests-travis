/* global describe, it */

'use strict';

const chai = require('chai');
const {expect} = chai;
const db = require('../lib/db');
const sinon = require('sinon');

describe('Temperature Scrapper', function () {
	describe('Test db.set', function () {
		it('Should save to the DB', function () {
			const spy = sinon.stub();
			const redis = {
				set: spy,
			};
			const DB = new db(redis);
			DB.set('test', 'value');
			expect(spy.calledOnce).to.be.true;
		});
	});
	describe('Test db.get', function () {
		it('Should get from the DB', function (done) {
			const spy = sinon.stub();
			const redis = {
				get: spy,
			};
			const DB = new db(redis);
			DB.get('test', function (err, result) {
				expect(err).to.be.null;
				expect(result).to.be.equal(123);
				done();
			});
			spy.callArgWith(1, null, 123);
		});
		it('Should return an error when something goes wrong', function (done) {
			const spy = sinon.stub();
			const redis = {
				get: spy,
			};
			const DB = new db(redis);
			DB.get('test', function (err, result) {
				expect(err).to.be.instanceof(Error);
				expect(result).to.be.null;
				done();
			});
			spy.callArgWith(1, new Error(), null);
		});
	});
});
