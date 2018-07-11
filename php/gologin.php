<?php
    // 获取用户名
    // header("Content-Type: application/json");
    include "public/public_db.php";
    $phone = $_POST["phone"];
    $password = $_POST["password"];
    $coon = new db();
    $sql="SELECT * FROM login WHERE phoneNum = $phone";
    $row = $coon->Query($sql,2);
    // 找到数据
    if($row) {
      // 返回用户基本信息
      $arr = array("code"=>"200", "msg"=> "", "data" => $row);
      
    } else {
      $arr = array("code"=>"100", "msg"=> "登录失败");
    }
    echo json_encode($arr);
  ?>