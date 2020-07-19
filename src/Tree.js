const Node = require('./Node.js');
const Expression = require('./Expression.js');

/** Class representing a tree */

module.exports = class Tree {
    /**
    * Create a tree
    * @param {Node} root - The root of the tree
    */
    constructor() {
        this.root = null;
    }

    /**
     * Function used for adding a node with a given data to the tree
     * 
     * @param {object} data - object which will be inserted as node data
     */
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

    /**
     * Function used for adding a node to the given node
     * 
     * @param {Node} node - Node to which the newNode will be added as a child
     * @param {Node} newNode - Node which will be added as a child to the node
     */
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
            // if exponents of two expressions are the same, add their coefficients and assign this Expression to the node
            const newCoefficient = parseInt(newNode.data.coefficient) + parseInt(node.data.coefficient);
            const exponent = node.data.exponent;
            node.data = new Expression(newCoefficient, exponent)
        }
    }

    /**
     * Function used for executing inorder traversal of the tre
     * 
     * @param {Node} node - node of the tree which is being "visited"
     * @param {array} array - array to which all the node data will be pushed
     */
    inorder(node, array = null) {
        // create an array in the first step of the recursion
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