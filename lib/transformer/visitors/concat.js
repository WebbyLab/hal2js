// Description: force string context for concatenation
// HAL: 2 & 2
// JS: 2 + "" + 2

module.exports = {
    BinaryExpression(path) {
        if ( path.node.operator !== '&' ) return;

        path.replaceWith({
            type: 'ExpressionStatement',
            expression: {
                type:"BinaryExpression",
                left:{
                   type:"BinaryExpression",
                   left: path.node.left,
                   operator:"+",
                   right:{
                      type:"StringLiteral",
                      value:""
                   }
                },
                operator:"+",
                right: path.node.right
            }
        });
    }
};
