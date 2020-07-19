const add = require('./add')
const Expression = require('./Expression')

try {
    // add.add([new Expression(0, 1), new Expression(2, 3), new Expression(2, 2), new Expression(1, 0)], [new Expression(1, 2), new Expression(1, 0)])
    add.add('s', [new Expression(1, 2), new Expression(1, 0)])
} catch (e) {
    console.error(e);
}
