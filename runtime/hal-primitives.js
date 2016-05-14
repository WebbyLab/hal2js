exports.mid = function(str, startSlice, lengthSlice) {
    return str.slice(startSlice, lengthSlice);
};

exports.len = function(str) {
    return str.length;
};

exports.IsDigit = function(str) {
    const allowedChars = '0123456789';
    let isDigit = false;
    for (i = 0; i < str.length; i++) {
        if (allowedChars.indexOf(str.charAt(i)) !== -1)  isDigit = true;
    }
   return isDigit;
};

exports.IsNumeric = function(str) {
    return /^\d+$/g.test(str);
};

exports.nonblank = function(val) {
    return (!val || val.langth === 0);
};

exports.getCurTick = function() {
    return Date.now();
};

exports.stopalert = function(msg) {
    console.log('stopalert: [%s]', msg);
};

exports.MessageBox = function(msg) {
    console.log('MessageBox: [%s]', msg);
};
