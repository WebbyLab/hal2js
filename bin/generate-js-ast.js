#!/usr/bin/env node

const babel = require('babel-core');
const babylon = require('babylon');
const fs = require('fs');

const code = 'function myFunc() { let res = ReadFirstMain(IVr,1,true) };';
const ast2 = babylon.parse(code, { allowReturnOutsideFunction: true });

fs.writeFile('./out.json', JSON.stringify(ast2, null, 4), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log('Ok');
});
