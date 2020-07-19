const addExpression = require('./addExpression')
const Expression = require('./Expression')

try {
    const firstExp = [new Expression(0, -1), new Expression(2, -2), new Expression(2, 2), new Expression(1, 0)];
    const secondExp = [new Expression(-5, -2), new Expression(1, 0), new Expression(123, 4324)];
    addExpression.add(firstExp, secondExp);
} catch (e) {
    console.error(e);
}
