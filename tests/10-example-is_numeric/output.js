function OnApplicationStartup() {
    let OnApplicationStartup;
    let text = [];
    let i;

    text[0] = "412a523";
    text[1] = "5152522";
    text[2] = "-123456";

    while(hal.nonblank(text[i])) {
        if(hal.IsNumeric(text[i])) {
            hal.stopalert(text[i] + "" + " is numeric value!");
        } else {
            hal.stopalert(text[i] + "" + " is not a numeric value!");
        }
        i = i + 1;
    }

    return;
}
