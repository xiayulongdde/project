<?php
<?php

$db = mysqli_connect("127.0.0.1","root","root","register");

$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$phone = $_REQUEST["phone"];

$sql = "INSERT INTO `userList` (`username`, `password`, `phone`) VALUES ('$username', '$password', '$phone')";
$result = mysqli_query($db, $sql);

$data = array("status"=>"", "msg"=>"", "data"=>"");
if($result)
{
  $data["status"] = "success";
  $data["msg"] = "恭喜你，注册成功！";
}else{
  $data["status"] = "error";
  $data["msg"] = "抱歉，用户名或者手机号码已经被注册了！";
}
echo json_encode($data,true);

?>












?>