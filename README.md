# Requirements
Node.js

# Build
To install the packages execute `npm install` command from the root folder

# Running the project
In order to run the project, run `start` script from the root folder with the command `npm run start`

# Running the tests
In order to run the tests, run `test` script from the root folder with the command `npm test`

# Explanation of the solution
The structure I used for storing the expressions is Expression class which contains two properties: coefficient and exponent which correspond to coeeficient and exponent standing next to the `x` value passed, e.g. Expression(2,5) stands for `2x^5`.
Then the whole expression is stored in an array, so `2x^4 + 3x^2 + 5` will be such an array in this program: 
`[new Expression(2,4), new Expression(3,2), new Expression(5, 0)]`

The elements of the arrays are then placed in a binary tree to quicken the process of adding the elements with the same exponent. In inorder tree traversal the Expression objects are added to the array, which is then sorted descendingly by the exponent value of the Expression objects.
