const peg = require('pegjs');
const fs  = require('fs');

const modulesPath = __dirname + '/lib';

function loadGrammar() {
    const modules = fs.readdirSync(modulesPath);

    return modules.map( module => fs.readFileSync(`${__dirname}/lib/${module}`, 'utf8' ) ).join('\n');
}

exports.parse = function(source) {
    const grammar = loadGrammar();
    fs.writeFileSync(__dirname + '/hal.dist.peg', grammar);

    const parser = peg.buildParser(grammar);
    return parser.parse(source);
}
