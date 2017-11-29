/*
Number
 */
function onlyNumber(event){
    event = event || window.event;
    var keyID = event.which || event.keyCode;
    if ((keyID >= 48 && keyID <= 57)
        || (keyID >= 96 && keyID <= 105)
        || keyID === 8 || keyID === 46 || keyID === 37 || keyID === 39) {
        return true;
    } else {
        return false;
    }

}

/*
Number
String
 */
function removeChar(event) {
    event = event || window.event;
    var keyID = event.which || event.keyCode;
    if ( keyID === 8 || keyID === 46 || keyID === 37 || keyID === 39 ) {
        return true;
    } else {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }
}