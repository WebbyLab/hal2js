exports.Mid = function(str, startSlice, lengthSlice) {
    return str.substr(startSlice, lengthSlice);
};

exports.Len = function(str) {
    return str.length;
};

exports.IsDigit = function(str) {
    return str.match(/^[0-9]+$/) ? true : false;
};

exports.IsNumeric = function(str) {
    return /^\d+$/g.test(str);
};

exports.NonBlank = function(val) {
    return (!val || val.langth === 0);
};

exports.GetCurTick = function() {
    return Date.now();
};

exports.StopAlert = function(msg) {
    console.log('stopalert: [%s]', msg);
};

exports.MessageBox = function(msgcode, msg) {
    console.log('MessageBox: msgcode=[%s], msg[%s]', msgcode, msg);
};
