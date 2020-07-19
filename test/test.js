const expect = require('chai').expect;
const add = require('../src/add')
const Expression = require('../src/Expression')
describe('Passing', function() {

    it('two arrays containing Expression objects some of which contain the same exponent gives a correct result', function() {
        const firstExpression = [new Expression(1, 2), new Expression(2, 3)];
        const secondExpression = [new Expression(2, 2), new Expression(1, 3), new Expression(1, 10)]
        const result = [new Expression(1, 10), new Expression(3, 3), new Expression(3, 2)]
        expect(add.add(firstExpression, secondExpression), result)
    });

    it('two arrays with all Expression objects having different exponents gives a correct result', function() {
        const firstExpression = [new Expression(1, 2), new Expression(2, 3)];
        const secondExpression = [new Expression(2, 1), new Expression(1, 5)];
        const result = [new Expression(1, 5), new Expression(2, 3), new Expression(1, 2), new Expression(2, 1)]
        expect(add.add(firstExpression, secondExpression), result)
    });
    it('two arrays containing Expression objects to add() function gives a correct result ', function() {
        expect(add.add([new Expression(1, 2), new Expression(2, 3)], [new Expression(2, 3), new Expression(1, 2)]), [new Expression(4, 3), new Expression(2, 2)])
    });

    it('only one array to add() function throws an error', function() {
        const firstExpression = [new Expression(1, 2)];
        const errorMessage = 'The add function requires two parameters - arrays of Expression objects';
        expect(function() {add.add(firstExpression)}).to.throw(errorMessage);
    });

    it('an array containing an object which is not an instance of Expression clas to add() function throws an error', function() {
        const firstExpression = [new Expression(1, 5)];
        const secondExpression = ['s']
        const errorMessage = 'The parameters to add function should be arrays of Expression objects';
        expect(function() {add.add(firstExpression, secondExpression)}).to.throw(errorMessage);
    });

    it('an object which is not an array to add() function throws an error', function() {
        const firstExpression = [new Expression(1, 2)];
        const secondExpression = 2;
        const errorMessage = 'The parameters to add function should be arrays of Expression objects';
        expect(function() {add.add(firstExpression, secondExpression)}).to.throw(errorMessage);
    });
});

