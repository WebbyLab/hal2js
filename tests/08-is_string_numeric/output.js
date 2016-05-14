function IsStringNumeric(s) {
    let IsStringNumeric;
    let i;
    let res;

    res = true;
    for (i=0;i<hal.len(s);i=i+1) {
        if (hal.IsDigit(hal.mid(s,i,1))==false) {
            res = false;
            i = hal.len(s)+1;
        }
    }

    IsStringNumeric = res;
    return IsStringNumeric;
}
