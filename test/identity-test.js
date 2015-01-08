require('buster').spec.expose();
var expect = require('buster').expect;

var identity = require('../app/identity');

describe('identity', function() {
	it('should be identity', function() {
		var sentinel = {};

		expect(identity(sentinel)).toBe(sentinel);
	});
});