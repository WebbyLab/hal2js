// Description: call IO related function with await
// HAL:
// function void myFunc()
// begin
//   integer res;
//   res = await hal.ReadFirstMain();
// end;
//
// JS:
// async function myFunc() {
//   let res = await ReadFirstMain();
// }


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
