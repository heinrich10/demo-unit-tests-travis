'use strict';

const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const scrape = require('./index');

describe('Temperature Scrapper', function () {
	it('Should return the temparature', function (done) {
		scrape(function (err, temp) {
			expect(err).to.be.null;
			expect(temp).to.be.not.null;
			done();
		});
	});
});
