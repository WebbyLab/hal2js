const babel    = require('babel-core');
const ast      = require('./concat.hal.ast.json');
const traverse = require('babel-traverse').default;

const visitors = [
    require('./visitors/concat')
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

visitAll(ast, visitors);
const res = babel.transformFromAst(ast);

console.dir(res.code);
