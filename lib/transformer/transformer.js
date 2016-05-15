const babel    = require('babel-core');
const traverse = require('babel-traverse').default;

const visitors = [
    require('./visitors/concat'),
    require('./visitors/async-await-calls'),
    require('./visitors/namespace-hal-calls'),
    require('./visitors/enable-hal-runtime'),
    require('./visitors/normalize-names')
];

function visitAll(ast, visitors) {
    visitors.forEach( visitor => visitOne(ast, visitor) );
}

function visitOne(ast, visitor) {
    traverse(ast, {
        enter(path) {
            const visit = visitor[path.node.type];
            if (visit) {
                visit(path);
            }
        }
    });
}

exports.transform = function(ast) {
    const astCopy = JSON.parse( JSON.stringify(ast) );
    visitAll(astCopy, visitors);
    return astCopy;
};
