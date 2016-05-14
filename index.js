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

function replaceCallExpression(ast) {

    Object.keys(ast).forEach(key => {
        if (ast[key].type === 'ExpressionStatement') {
            if (ast[key].expression.type === 'CallExpression') {
                const callee = ast[key].expression.callee;
                ast[key].expression.callee = {type:"MemberExpression",
                                              object:{
                                                 type:"Identifier",
                                                 name:"hal"
                                              },
                                              property:callee,
                                              computed:false
                                            };
                if (typeof ast[key] === 'object') {
                    replaceCallExpression(ast[key]);
                }                  
            }
        } else if (typeof ast[key] === 'object') {
            replaceCallExpression(ast[key]);
        }
    });
}

replaceNode(ast.program.body);
replaceCallExpression(ast.program.body);
console.log(ast.program.body[0].expression);
const res = babel.transformFromAst(ast);

console.dir(res.code);

/*const code = 'time.getDay();';
const ast2 = babylon.parse(code, { allowReturnOutsideFunction: true });

fs.writeFile('./111.json', JSON.stringify(ast2), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('Ok');
});*/

/*{  
    "type":"ExpressionStatement",
    "expression":{  
       "type":"CallExpression",
       "callee":{  
          "type":"Identifier",
          "name":"getDay"
       },
       "arguments":[

       ]
    }
 }

    "type":"ExpressionStatement",
    "expression":{  
       "callee":{  
          "type":"MemberExpression",
          "object":{  
             "type":"Identifier",
             "name":"time"
          },
          "property":{  
             "type":"Identifier",
             "name":"getDay"
          },
          "computed":false
       },
       "arguments":[  

       ]
    }

*/

       