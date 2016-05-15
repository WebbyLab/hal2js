'use strict';
const babel = require('babel-core');
const babylon = require('babylon');
const fs = require('fs');

const code = 'function foo(){ let json = getJSON("file.json"); };';
const ast2 = babylon.parse(code, { allowReturnOutsideFunction: true , plugins: ['asyncFunctions'] });

fs.writeFile('./111.json', JSON.stringify(ast2, null, 4), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('Ok');
});
