const asyncFunctions = require('../async-functions.json');

module.exports = {
    CallExpression(path) {
        if (asyncFunctions.includes(path.node.callee.name) && path.parent.type !== 'AwaitExpression') {
            path.replaceWith({
                type: 'AwaitExpression',
                argument: path.node
            });
        
        const functionDeclPath = path.getAncestry().find( p => p.node.type === 'FunctionDeclaration');
        functionDeclPath.node.async = true;
        }
    }
};
