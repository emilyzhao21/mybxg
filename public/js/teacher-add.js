define(['jquery', 'template', 'util'], function ($, template, util) {
  var tcId = util.qs('tc_id');
  if (tcId) {
    //编辑功能
    $.ajax({
      type: 'get',
      url: '/api/teacher/edit',
      data:{tc_id:tcId},
      dataType: 'json',
      success: function (data) {
        if (data.code == 200) {
          /* 添加一个属性，设置面包屑选项 */
          data.result.operate = '编辑讲师';
          var html = template('teacherTpl', data.result);
          $('#teacherInfo').html(html);

        }
      }
    });
  } else {
    //添加功能
    var html = template('teacherTpl',{operate:'添加讲师'});
    $('#teacherInfo').html(html);
  }
});