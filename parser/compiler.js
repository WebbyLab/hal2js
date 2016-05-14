const peg = require('pegjs');
const fs  = require('fs');

module.exports = function(source) {
    const grammar = fs.readFileSync(__dirname + '/hal.peg', 'utf8');
    const parser = peg.buildParser(grammar);

    return parser.parse(source);;
}