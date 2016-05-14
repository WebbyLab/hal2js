const babel = require('babel-core');

exports.generate = function(ast) {
    return babel.transformFromAst(ast).code;
}
