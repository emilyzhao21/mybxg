define(['jquery', 'cookie'], function ($) {
    $('#loginBtn').on('click', function () {
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: $('#loginForm').serialize(),
            dataType: 'json',
            success: function (data) {
                if (data.code == 200) {
                    location.href = '/main/index';
                    $.cookie('loginInfo', JSON.stringify(data.result), {
                        path: '/'
                    })
                }
            }
        });
        return false; //阻止默认行为，冒泡和其他，在原生js中不阻止冒泡
    });
});