define(['jquery','template'],function($,template){
  $.ajax({
    type:'get',
    url:'/api/teacher',
    dataType:'json',
    success:function(data){
      var  html = template('teacherListTpl',data);
      $('#tbodyMsg').html(html);
    }
  });
});