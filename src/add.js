// import parseInput from './helpers';
const Tree = require('./Tree.js')
const Expression = require('./Expression.js')

function add(exp1, exp2) {
    //regex for space and plus sign
    // const regex = /[\s+]/

    // const firstSplit = exp1.split(regex).filter(x => x !== '');
    // const secondSplit = exp2.split(regex).filter(x => x !== '');
    // const firstParsed = parseInput(firstSplit);
    // const secondParsed = parseInput(secondSplit);
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

    const tree = new Tree();
    exp1.forEach(element => {tree.insert(element)});
    exp2.forEach(element => {tree.insert(element)})

    const sortedArray = tree.inorder(tree.root).sort((a, b) => {
        return b.exponent - a.exponent
    })

    console.log(sortedArray)

}
exports.add = add;

  // const output = array.map(element => {
    //     return `${element[0]}x^${element[1]}`
    // })
    // const string = output.toString().replace(/,/g, ' + ')

// export default function parseInput(input) {

//     return input.map(exp => {
//         const indexOfX = exp.indexOf('x');
//         if (exp.includes('x')) {
//             const indexOfPower = exp.indexOf('^');
//             if (exp.includes('^')) {
//                 let coefficient = exp.substr(0, indexOfPower - 1);
//                 if (coefficient === '') {
//                     coefficient = '1'
//                 }
//                 const exponent = exp.substr(indexOfPower + 1, exp.length - 1)
//                 return [coefficient, exponent]
//             } else {
//                 let coefficient = exp.substr(0, indexOfX);
//                 if (coefficient === '') {
//                     coefficient = '1'
//                 }
//                 return [coefficient, '1']
//             }
//         } else {
//             return [exp, '0']

//         }
//     })
// }


