// Description:
// HAL: integer teSt; test = 10;
// JS: integer teSt; teSt = 10;

const lowerCase2original = {};

module.exports = {
    Identifier(path) {
        const identifierLc = path.node.name.toLowerCase();

        if ( lowerCase2original[identifierLc] ) {
            path.node.name = lowerCase2original[identifierLc];
        } else {
            lowerCase2original[identifierLc] = path.node.name;
        }
    }
};
