/** Class representing a node */

module.exports = class Node {
    /**
    * Create a node
    * @param {number} data - The node value
    * @param {Node} left - The left child of the node
    * @param {Node} right - The right child of the node 
    */
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
} 