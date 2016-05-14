const HALPrimitives = require('../primitives-list.json');

module.exports = {
    CallExpression(path) {
        if ( !HALPrimitives.includes(path.node.callee.name) )  return;

        path.node.callee = {
            "type":"MemberExpression",
            "object":{
                "type":"Identifier",
                "name":"hal"
            },
            "property":{
                 "type":"Identifier",
                 "name": path.node.callee.name
            },
            "computed":false
        };
    }
};
