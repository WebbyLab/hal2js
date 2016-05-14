const peg = require('pegjs');
const fs  = require('fs');

exports.parse = function(source) {
    const grammar = fs.readFileSync(__dirname + '/hal.peg', 'utf8');
    console.log(grammar.length)

    const parser = peg.buildParser(grammar);
    return parser.parse(source);
}
