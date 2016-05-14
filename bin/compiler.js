#!/usr/bin/env node
'use strict';

const fs        = require('fs')
const {docopt}  = require('docopt');
const compile   = require('../parser/compiler.js');

const doc =  `
    Usage:
       compiler.js --src=<src> [--dst=<dst>]
       compiler.js -h | --help
    
    Options:'
       -h --help               Show this screen.
       -s --src <src>          Source HAL code.
       -d --dst <dst>          Destination JS code.`;
       
const opts = docopt(doc);
const src  = opts['--src'];
const dst  = opts['--dst'];

function main(){
    const source = fs.readFileSync(src, 'utf-8');
    const ast    = compile(source);

    if (dst) {
        fs.writeFileSync(dst, JSON.stringify(ast));
    } else {
        console.log(ast);
    }
}

main();
