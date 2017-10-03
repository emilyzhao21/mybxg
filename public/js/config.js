require.config({
  baseUrl: '/public/assets', //定义路径根目录
  paths: {
    //给js文件 定义一个路径别名
    jquery: 'jquery/jquery.min',
    cookie: 'jquery-cookie/jquery.cookie',
    template: 'artTemplate/template-web',
    bootstrap: 'bootstrap/js/bootstrap',
    datepicker:'bootstrap-datepicker/js/bootstrap-datepicker',
    language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    util:'../js/util',
    common: '../js/common', //是common.js的文件模块化define
    login: '../js/login',
    teacherList: '../js/teacher-list',
    teacherAdd:'../js/teacher-add'
  },
  shim: {
    //bootstrap不是标准模块，依赖jQuery，使用shim属性将非标准模块转化为标准模块
    bootstrap: {
      deps: ['jquery'] //deps 固定语法
    },
    //language是非标准化模块，依赖于jQuery和datepicker
    language:{
      deps:['jquery','datepicker']
    }
  }
});