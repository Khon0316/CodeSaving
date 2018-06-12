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

/* 해당 달의 마지막 일수 구하기 */
$last_day = 32 - (new Date($('#year').val(), ($('#month').val() - 1), 32).getDate());

/* input 엔터 방지 */
document.onkeypress = function (evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13) && (node.type=="text"))  {
        return false;
    }
};
