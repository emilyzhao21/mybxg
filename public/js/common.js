define(['jquery',  'template','cookie'], function ($,template) {
  //template需要传入参数
  /* NProgress.start();
  NProgress.done(); */

  $('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
  });

  // 实现退出功能
  $('#logoutBtn').click(function () {
    $.ajax({
      type: 'post',
      url: '/api/logout',
      dataType: 'json',
      success: function (data) {
        if (data.code == 200) {
          // 重新跳转到登录页
          location.href = '/main/login';
        }
      }
    });
  });

  // 检测用户是否登录
  var flag = $.cookie('PHPSESSID');
  if (!flag && location.pathname != '/main/login') {
    // 如果cookie不存在，跳转到登录页
    location.href = '/main/login';
  }

  // 设置用户头像信息
  var loginInfo = $.cookie('loginInfo');
  loginInfo = loginInfo && JSON.parse(loginInfo);
  //使用模板引擎添加用户头像信息
  var tpl = '<div class="avatar img-circle">' +
    '<img src="{{tc_avatar}}">' +
    '</div>' +
    '<h4>{{tc_name}}</h4>';
  /* 第二种方法：var render = template.compile(tpl);//编译模板
  var html = render(data);//渲染 */
  /* 第三种方法：var html = template.render(tpl,data) */
  /* 模板引擎的两种方法：1.script标签中 2.标签字符串拼接 */

  var html = template.render(tpl, loginInfo);
  $('#headIconTpl').html(html);
  // 设置用户的头像信息
  /*   $('.aside .profile img').attr('src', loginInfo.tc_avatar);
    $('.aside .profile h4').html(loginInfo.tc_name); */
});