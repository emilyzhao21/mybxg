define(['jquery', 'template','bootstrap'], function ($, template) {
  $.ajax({
    type: 'get',
    url: '/api/teacher',
    dataType: 'json',
    success: function (data) {
      var html = template('teacherListTpl', data);
      $('#tbodyMsg').html(html);
      //讲师启用和注销
      $('.eod').on('click', function () {
        //备份当前this的值 默认是DOM对象
        var that = this;
        //获取所需参数 tc_id tc_status，使用自定义属性
        //closet(选择器),获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上
        var td = $(this).closest('td');
        var tcId = td.attr('data-tc-id');
        var tcStatus = td.attr('data-tc-status');
        //发送请求
        $.ajax({
          type: 'post',
          url: '/api/teacher/handle',
          data: {
            tc_id: tcId,
            tc_status: tcStatus
          },
          dataType: 'json',
          success: function (data) {
            if (data.code == 200) {
              //将获取的tc_status设置为数据中的值
              td.attr('data-tc-status', data.result.tc_status);
              //判断值，显示按钮状态
              if (data.result.tc_status == 0) {
                $(that).text('启用');
              } else {
                $(that).text('注销');
              }
            }
          }
        });
      });
      //讲师信息查看功能
      $('.preview').on('click',function(){
        //需要参数tc_id
        var td = $(this).closest('td');
        var tcId = td.attr('data-tc-id');
        $.ajax({
          type:'post',
          url:'/api/teacher/view',
          data:{tc_id:tcId},
          dataType:'json',
          success:function(data){
            if(data.code == 200){
              var html = template('modalTpl',data.result);
              $('#modalMsg').html(html);
              $('#teacherModal').modal();
            }
          }
        });
      });
    }
  });
});