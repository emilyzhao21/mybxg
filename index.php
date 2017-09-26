<?php
  // 后端路由（根据URL的不同响应不同的页面）

  header('content-type:text/html; charset=utf8');
  // include('./header.html');
  // echo '<div>主页内容</div>';
  //include('./views/main/login.html');
  // include 在当前PHP页面内部嵌入一个子页面

  // 必须能够通过URL区分出用户想访问哪个页面

  //默认文件目录
  $dir = 'main';
  //默认文件夹名称
  $filename = 'index';

  //路由优化
  //$_SERVER['PATH_INFO'] 获取url的后缀，即/以后的地址信息，包括/
  //array_key_exists(key,array)表示数组中是否存在此键名，存在返回true，否则返回false
  //explode (边界上的分隔字符，字符串，限制个数) 相当于str.split()方法，将字符串分割成数组
  //count(array,mode) 函数返回数组中元素的数目。 mode 0不对多维数组中的所有元素 默认,1计算多维数组中的所有元素
  //处理url路径
if (array_key_exists('PATH_INFO', $_SERVER)) {
    //路径存在 获取url
    $path = $_SERVER['PATH_INFO'];
    //截取字符串
    $str = substr($path, 1); //   /main/index => main/index
    
    //将$path分成两部分 数组形式
    $ret = explode('/', $str);
    if (count($ret) == 2) {
        $dir = $ret[0];
        $filename = $ret[1];
    } else {
      //若不是，同一路径
        $filename = 'login';
    }
}
  include('./views/'.$dir.'/'.$filename.'.html');
?>