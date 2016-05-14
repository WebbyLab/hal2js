module.exports = {
    Program(path) {
        const halRequireStament = {
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
                                    "rawValue": "./hal-runtime",
                                    "raw": "\"./hal-runtime\""
                                },
                                "value": "./hal-runtime"
                            }
                        ]
                    }
                }
            ],
            "kind": "const"
        };

        path.node.body.unshift(halRequireStament);
    }
};
