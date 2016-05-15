// Description: Enable hal-rutime
// JS: const hal = require('./hal-rutime');

const RUNTIME_PATH = "./runtime/hal";

module.exports = {
    Program(path) {
        const halRequireStatement = {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "hal"
                    },
                    "init": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "Identifier",
                            "name": "require"
                        },
                        "arguments": [
                            {
                                "type": "StringLiteral",
                                "extra": {
                                    "rawValue": RUNTIME_PATH,
                                    "raw": `"${RUNTIME_PATH}"`
                                },
                                "value": RUNTIME_PATH
                            }
                        ]
                    }
                }
            ],
            "kind": "const"
        };

        path.node.body.unshift(halRequireStatement);
    }
};
