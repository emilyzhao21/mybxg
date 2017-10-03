define(['jquery', 'template', 'util'], function ($, template, util) {
  var tcId = util.qs('tc_id');
  if (tcId) {
    //编辑功能
    $.ajax({
      type: 'post',
      url: '/api/teacher/edit',
      data: {
        tc_id: tcId
      },
      dataType: 'json',
      success: function (data) {
        if (data.code == 200) {
          /* 添加一个属性，设置面包屑选项 */
          data.result.operate = '编辑讲师';
          var html = template('teacherTpl', data.result);
          $('#teacherInfo').html(html);
          //修改信息，需要提交tc_id 。但表单中没有此项，所以添加个隐藏标签 input:hidden
          //表单元素都需要添加name和value
          submitForm('/api/teacher/update');
        }
      }
    });
  } else {
    //添加功能
    var html = template('teacherTpl', {
      operate: '添加讲师'
    });
    $('#teacherInfo').html(html);
    submitForm('/api/teacher/add');    
  }

  //提交表单功能，编辑和添加的请求地址不同，所以封装个方法
  function submitForm(url) {
    //点击提交按钮时，发出请求
    $('#teacherBtn').click(function () {
      $.ajax({
        type: 'post',
        url: url,
        data: $('#teacherForm').serialize(),
        dataType: 'json',
        success: function (data) {
          if (data.code == 200) {
            location.href = '/teacher/list';
          }
        }
      });
      return false;//阻止submit的默认提交行为。get
    })
  };
});