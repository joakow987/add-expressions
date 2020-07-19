const expect = require('chai').expect;
const addExpression = require('../src/addExpression')
const Expression = require('../src/Expression')

describe('Adding', function() {

    it('two expressions with some elements having the same positive exponent should add the coefficients of those elements and return a sorted Expression array', function() {
        const firstExpression = [new Expression(1, 2), new Expression(2, 3), new Expression(1, 0)];
        const secondExpression = [new Expression(2, 2), new Expression(1, 3), new Expression(1, 10)]
        const result = [new Expression(1, 10), new Expression(3, 3), new Expression(3, 2), new Expression(1, 0)]
        expect(addExpression.add(firstExpression, secondExpression), result)
    });

    it('two expression without any elements with the same exponent should return concatenated, sorted array', function() {
        const firstExpression = [new Expression(1, 1234), new Expression(2, 3)];
        const secondExpression = [new Expression(2, 1), new Expression(1, -3),];
        const result = [new Expression(1, 1234), new Expression(2, 3), new Expression(2, 1), new Expression(1, -3)]
        expect(addExpression.add(firstExpression, secondExpression), result)
    });

    it('two expressions with some negative exponents should add the coefficients of elements with the same exponent and return a sorted Expression array', function() {
        const firstExpression = [new Expression(1, -2), new Expression(2, 3)];
        const secondExpression = [new Expression(2, -2), new Expression(1, 3)];
        const result = [new Expression(3, 3), new Expression(3, -2)]
        expect(addExpression.add(firstExpression, secondExpression), result)
    });

    it('two expressions with negative exponents and coefficients should add the coefficients of elements with the same exponent and return a sorted Expression array', function() {
        const firstExpression = [new Expression(-1, -2), new Expression(-2, -5)];
        const secondExpression = [new Expression(2, -2), new Expression(-4, -5)];
        const result = [new Expression(-1, -2), new Expression(-6, -5)]
        expect(addExpression.add(firstExpression, secondExpression), result)
    });

    it('two empty arrays should give an empty result array', function() {
        expect(addExpression.add([], []), [])
    });

    it('only one array should throw an error', function() {
        const firstExpression = [new Expression(1, 2)];
        const errorMessage = 'The add function requires two parameters - arrays of Expression objects';
        expect(function() {addExpression.add(firstExpression)}).to.throw(errorMessage);
    });

    it('an Expression array and an array of objects that are not instance of Expression class should throw an error', function() {
        const firstExpression = [new Expression(1, 5)];
        const secondExpression = ['s', 'd']
        const errorMessage = 'The parameters to add function should be arrays of Expression objects';
        expect(function() {addExpression.add(firstExpression, secondExpression)}).to.throw(errorMessage);
    });

    it('an Expressison array and an object which is not an array should throw an error', function() {
        const firstExpression = [new Expression(1, 2)];
        const secondExpression = 2;
        const errorMessage = 'The parameters to add function should be arrays of Expression objects';
        expect(function() {addExpression.add(firstExpression, secondExpression)}).to.throw(errorMessage);
    });
});

