'use strict';
const babel = require('babel-core');
const babylon = require('babylon');
const fs = require('fs');
const ast = require('./ast.json');


/*const code = 'let a = 10; let b = 5; c = a + b;';
const ast = babylon.parse(code, { allowReturnOutsideFunction: true });

fs.writeFile('./ast.json', JSON.stringify(ast), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('Ok');
});*/

const res = babel.transformFromAst(ast);

console.dir(res.code);