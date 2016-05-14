#!/usr/bin/env node

const util = require('util');
const transformer    = require('../../../lib/transformer/transformer');
const generator      = require('../../../lib/generator/generator');
const inAst          = require('./in-ast.json');

const outAst = transformer.transform(inAst);

// console.log( util.inspect( outAst, {depth: null} ));
console.log( generator.generate(outAst) );
