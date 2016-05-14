const HALPrimitives = require('../primitives-list.json');

const lowerCase2CamelCase = {};
HALPrimitives.forEach( name => lowerCase2CamelCase[name.toLowerCase()] = name );

module.exports = {
    CallExpression(path) {
        const funcNameLc = path.node.callee.name.toLowerCase();

        if ( !lowerCase2CamelCase[funcNameLc] ) return;

        path.node.callee = {
            "type":"MemberExpression",
            "object":{
                "type":"Identifier",
                "name":"hal"
            },
            "property":{
                 "type":"Identifier",
                 "name": lowerCase2CamelCase[funcNameLc] // Restore camel case
            },
            "computed":false
        };
    }
};
