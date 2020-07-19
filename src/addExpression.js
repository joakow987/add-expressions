const Tree = require('./Tree.js')
const Expression = require('./Expression.js')

/**
 * Function used for adding two arrays of instances of Expression class
 * 
 * @param {Array} exp1 - first expression (array of instances of Expression class)
 * @param {Array} exp2 - second expression (array of instances of Expression class)
 * @returns {Array} array of instances of Expression class that is a result of adding exp1 and exp2 
 */
function add(exp1, exp2) {

    if (exp1 === undefined || exp2 === undefined || exp1 === null || exp2 === null) {
        throw (new Error('The add function requires two parameters - arrays of Expression objects'))
    }
    if (!Array.isArray(exp1) || !Array.isArray(exp2)) {
        throw (new Error('The parameters to add function should be arrays of Expression objects'))
    }

    exp1.forEach(element => {
        if (!(element instanceof Expression)) throw (new Error('The parameters to add function should be arrays of Expression objects'))
    })
    exp2.forEach(element => {
        if (!(element instanceof Expression)) throw (new Error('The parameters to add function should be arrays of Expression objects'))
    })

    // add all nodes data to the Tree
    const tree = new Tree();
    exp1.forEach(element => {tree.insert(element)});
    exp2.forEach(element => {tree.insert(element)})

    // sort the array with the nodes data descendingly by the exponents value
    const sortedArray = tree.inorder(tree.root).sort((a, b) => {
        return b.exponent - a.exponent
    })

    return sortedArray;
}
exports.add = add;

