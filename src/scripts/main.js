var appSEO = {
    title: "Tiêu đề trang",
    url: "https://www.google.com/",
    address: "Địa chỉ",
    tel: "02304203;3453485834;989898;000000",
    telCount: 0,
    map: {
        lg: '12.453643',
        ln: '106,12324',
        code: 'VN',
    },
    content: {
        content_1: 'Lorem ips. Nobis, quibusdam vitae?',
        content_2: 'ratione nesciun. Nobis, quibusdam vitae?',
        content_3: 'ratione nesciun. Nobis, quibusdam vitae?',
        content_4: 'ratiorferendis. Nobis, quibusdam vitae?',
    },
    initForm: function() {
        for (var key in appSEO) {
            if (appSEO.hasOwnProperty(key)) {
                if (typeof appSEO[key] === 'string') {

                    if (key === 'tel') {

                        let u = appSEO[key].split(";")
                        appSEO.telCount = u.length
                        for (let index = 0; index < u.length; index++) {
                            $('#genform').append(appSEO.buildForm(key + "-" + (index + 1), u[index]))

                        }
                    } else {
                        $('#genform').append(appSEO.buildForm(key, appSEO[key]))
                    }
                } else if (typeof appSEO[key] === 'object') {
                    for (var k in appSEO[key]) {
                        if (appSEO[key].hasOwnProperty(k)) {
                            $('#genform').append(appSEO.buildForm(k, appSEO[key][k]))

                        }
                    }
                }
            }
        }
    },
    buildForm: function(a, b) {
        return '<div class="input-group mb-3"> <div class="input-group-prepend"><span class="input-group-text">' + a.charAt(0).toUpperCase() + a.slice(1) + '</span></div> <input class="form-control" id="seo-' + a + '" type="text" placeholder="' + b + '" value="' + b + '">'
    },
    resultForm: function(e) {
        for (var key in appSEO) {
            if (appSEO.hasOwnProperty(key)) {
                if (typeof appSEO[key] === 'string') {

                    if (key === 'tel') {
                        let tl = []
                        for (let index = 0; index < appSEO.telCount; index++) {
                            let mm = $('#genform #seo-' + key + '-' + (index + 1)).val()
                            tl.push(mm)
                        }
                        let rl = tl.join(';').toString()
                        appSEO[key] = rl
                    } else {
                        let em = $('#genform #seo-' + key).val()
                        appSEO[key] = em
                    }
                } else if (typeof appSEO[key] === 'object') {
                    for (var k in appSEO[key]) {
                        if (appSEO[key].hasOwnProperty(k)) {

                            let emk = $('#genform #seo-' + k).val()
                            appSEO[key][k] = emk

                        }
                    }
                }
            }
        }
        console.log(appSEO)
        $('#result').val(JSON.stringify(appSEO))
    }
}
appSEO.initForm()