const parser      = require('./parser/parser');
const transformer = require('./transformer/transformer');
const generator   = require('./generator/generator');

exports.compile = function(halSource) {
    const ast            = parser.parse(halSource);
    const transformedAst = transformer.transform(ast);
    const jsSource       = generator.generate(ast);

    return jsSource;
};
