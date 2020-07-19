const Node = require('./Node.js');
const Expression = require('./Expression.js');

module.exports = class Tree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        // excludes numbers with coefficients = 0
        if (newNode.data.coefficient !== 0) {
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode)
            }
        }
    }

    insertNode(node, newNode) {
        if (newNode.data.exponent < node.data.exponent) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else if (newNode.data.exponent > node.data.exponent) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        } else {
            const newCoefficient = parseInt(newNode.data.coefficient) + parseInt(node.data.coefficient);
            const exponent = node.data.exponent;
            node.data = new Expression(newCoefficient, exponent)
        }
    }

    inorder(node, array = null) {
        if (array === null) {
            array = new Array();
        }
        if (node !== null) {
            this.inorder(node.left, array);
            array.push(node.data);
            this.inorder(node.right, array);
        }
        return array;
    }
}