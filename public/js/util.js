define(['jquery'], function ($) {
  //封装工具包，获取URL地址
  return {
    qs: function (key) {
      var param = location.search.substr(1); //获取?之后的数据  param 参数
      var tcId = null;
      if (param) {
        var ps = param.split('&');
        $.each(ps, function (i, item) {
          var kv = item.split('=');
          if (kv[0] == key) {
            tcId = kv[1];
            return false;//找到tc_id,终止循环
          }
        });
      }
      return tcId;
    }
  }


});