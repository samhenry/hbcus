var expect = require('chai').expect;
var hbcus = require('../src/index.js');

describe('hbcus-random-names', function() {
    describe('all', function() {
        it('should be an array of strings.', function() {
            expect(hbcus.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        });
        it('Should contain Morgan State', function() {
            expect(hbcus.all).to.include('Morgan State');
        });
    });

    describe('get', function() {
        it('Should return a single random value from the all array', function() {
            var randomValue = hbcus.get();
            expect(hbcus.all).to.include(randomValue);
        });
    });

    describe('random', function() {

        it('Should return an array of random names if passed a number', function() {
            var randomItems = hbcus.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(hbcus.all).to.include(item);
            });
        });
    });
});