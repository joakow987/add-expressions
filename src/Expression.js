/** Class representing an expression */
module.exports = class Expression {
    /**
     * Create an expression.
     * @param {number} coefficient - The coefficient of an expression
     * @param {number} exponent - The exponent of an expression
     */
    constructor(coefficient, exponent) {
        this.coefficient = coefficient;
        this.exponent = exponent;
    }
}