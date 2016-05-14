function IsStringNumeric(s) {
    let IsStringNumeric;
    let i;
    let res;

    res = true;
    for (i=0;i<len(s);i=i+1) {
        if (IsDigit(mid(s,i,1))==false) {
            res = false;
            i = len(s)+1;
        }
    }

    IsStringNumeric = res;
    return IsStringNumeric;
}
