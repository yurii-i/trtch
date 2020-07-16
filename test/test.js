const numSequence = require("../index");

describe('testCorrectSequence', function () {

	it('[1,2,3,4,5,6,7,8] -> 1-8', function (done) {
		numSequence.findAsync([1,2,3,4,5,6,7,8]).then((data) => {
			if (data === '1-8') done();
			else done('error text')
		})
	});

	it('[1,3,4,5,6,7,8] -> 1,3-8', function (done) {
		numSequence.findAsync([1,3,4,5,6,7,8]).then((data) => {
			if (data === '1,3-8') done();
			else done('error text')
		})
	});

	it('[1,3,4,5,6,7,8,10,11,12] -> 1,3-8,10-12', function (done) {
		numSequence.findAsync([1,3,4,5,6,7,8,10,11,12]).then((data) => {
			if (data === '1,3-8,10-12') done();
			else done('error text')
		})
	});

	it('[1,2,3] -> 1-3', function (done) {
		numSequence.findAsync([1,2,3]).then((data) => {
			if (data === '1-3') done();
			else done('error text')
		})
	});

	it('[1,2] -> 1,2', function (done) {
		numSequence.findAsync([1,2]).then((data) => {
			if (data === '1,2') done();
			else done('error text')
		})
	});

	it('[1,2,4] -> 1,2,4', function (done) {
		numSequence.findAsync([1,2,4]).then((data) => {
			if (data === '1,2,4') done();
			else done('error text')
		})
	});

	it('[1,2,4,5,6] -> 1,2,4-6', function (done) {
		numSequence.findAsync([1,2,4,5,6]).then((data) => {
			if (data === '1,2,4-6') done();
			else done('error text')
		})
	});

	it('[1,2,3,7,8,9,15,17,19,20,21] -> 1-3,7-9,15,17,19-21', function (done) {
		numSequence.findAsync([1,2,3,7,8,9,15,17,19,20,21]).then((data) => {
			if (data === '1-3,7-9,15,17,19-21') done();
			else done('error text')
		})
	});

	it('[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> 1-6,100,1091,1999-2002', function (done) {
		numSequence.findAsync([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]).then((data) => {
			if (data === '1-6,100,1091,1999-2002') done();
			else done('error text')
		})
	});

	it('[1] -> 1', function (done) {
		numSequence.findAsync([1]).then((data) => {
			if (data === '1') done();
			else done('error text')
		})
	});

	it('[1,3,5,7,9,11] -> 1,3,5,7,9,11', function (done) {
		numSequence.findAsync([1,3,5,7,9,11]).then((data) => {
			if (data === '1,3,5,7,9,11') done();
			else done('error text')
		})
	});
});
