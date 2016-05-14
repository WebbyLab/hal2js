'use strict';
const babel = require('babel-core');
const babylon = require('babylon');
const fs = require('fs');
const ast = require('./transforms/concat.hal.ast.json');

function replaceNode(ast) {

    Object.keys(ast).forEach(key => {
        if (ast[key].type === 'BinaryExpression') {
            if (ast[key].operator === '&') {
                const left = ast[key].left;
                const right = ast[key].right;
                ast[key] = {  
                    type:"ExpressionStatement",
                    expression:{  
                       type:"BinaryExpression",
                       left:{  
                          type:"BinaryExpression",
                          left:left,
                          operator:"+",
                          right:{  
                             type:"StringLiteral",
                             value:""
                          }
                       },
                       operator:"+",
                       right:right
                    }
                 };
            }
        } else if (typeof ast[key].expression === 'object') {
            replaceNode(ast[key].expression);
        }
    });
}

replaceNode(ast.program.body);
const res = babel.transformFromAst(ast);

console.dir(res.code);

/*const code = 'a + "" + b';
const ast2 = babylon.parse(code, { allowReturnOutsideFunction: true });

fs.writeFile('./111.json', JSON.stringify(ast2), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('Ok');
});
*/
