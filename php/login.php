<?php
    // 获取用户名
    // header("Content-Type: application/json");
    include "public/public_db.php";
    $phone = $_POST['phone'];
    $password = $_POST['password'];
    $coon = new db();
    $sql="INSERT INTO login (phoneNum,PASSWORD) VALUES ($phone,'$password')";
    $row = $coon->Query($sql,3);
    // 找到数据
    if($row) {
      // 返回用户基本信息
      $array = array("code"=>"200", "msg"=> "");
      
    } else {
      $array = array("code"=>"100", "msg"=> "注册失败");
    }
    echo json_encode($array);
  ?>