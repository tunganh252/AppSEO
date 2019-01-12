'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

eval(function (p, a, c, k, _e, r) {
    _e = function e(c) {
        return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };if (!''.replace(/^/, String)) {
        while (c--) {
            r[_e(c)] = k[c] || _e(c);
        }k = [function (e) {
            return r[e];
        }];_e = function _e() {
            return '\\w+';
        };c = 1;
    };while (c--) {
        if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
    }return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
}

$(function () {
    var nua = navigator.userAgent;
    var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%');
    }
});
var appSEO = {
    title: "Tiêu đề trang",
    url: "https://www.google.com/",
    address: "Địa chỉ",
    tel: "02304203;3453485834;989898;000000",
    telCount: 0,
    map: {
        lg: '12.453643',
        ln: '106,12324',
        code: 'VN'
    },
    content: {
        content_1: 'Lorem ips. Nobis, quibusdam vitae?',
        content_2: 'ratione nesciun. Nobis, quibusdam vitae?',
        content_3: 'ratione nesciun. Nobis, quibusdam vitae?',
        content_4: 'ratiorferendis. Nobis, quibusdam vitae?'
    },
    initForm: function initForm() {
        for (var key in appSEO) {
            if (appSEO.hasOwnProperty(key)) {
                if (typeof appSEO[key] === 'string') {

                    if (key === 'tel') {

                        var u = appSEO[key].split(";");
                        appSEO.telCount = u.length;
                        for (var index = 0; index < u.length; index++) {
                            $('#genform').append(appSEO.buildForm(key + "-" + (index + 1), u[index]));
                        }
                    } else {
                        $('#genform').append(appSEO.buildForm(key, appSEO[key]));
                    }
                } else if (_typeof(appSEO[key]) === 'object') {
                    for (var k in appSEO[key]) {
                        if (appSEO[key].hasOwnProperty(k)) {
                            $('#genform').append(appSEO.buildForm(k, appSEO[key][k]));
                        }
                    }
                }
            }
        }
    },
    buildForm: function buildForm(a, b) {
        return '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text">' + a.charAt(0).toUpperCase() + a.slice(1) + '</span></div> <input class="form-control" id="seo-' + a + '" type="text" placeholder="' + b + '" value="' + b + '">';
    },
    resultForm: function resultForm(e) {
        for (var key in appSEO) {
            if (appSEO.hasOwnProperty(key)) {
                if (typeof appSEO[key] === 'string') {

                    if (key === 'tel') {
                        var tl = [];
                        for (var index = 0; index < appSEO.telCount; index++) {
                            var mm = $('#genform #seo-' + key + '-' + (index + 1)).val();
                            tl.push(mm);
                        }
                        var rl = tl.join(';').toString();
                        appSEO[key] = rl;
                    } else {
                        var em = $('#genform #seo-' + key).val();
                        appSEO[key] = em;
                    }
                } else if (_typeof(appSEO[key]) === 'object') {
                    for (var k in appSEO[key]) {
                        if (appSEO[key].hasOwnProperty(k)) {

                            var emk = $('#genform #seo-' + k).val();
                            appSEO[key][k] = emk;
                        }
                    }
                }
            }
        }
        console.log(appSEO);
        $('#result').val(JSON.stringify(appSEO));
    }
};
appSEO.initForm();
//# sourceMappingURL=main.js.map
