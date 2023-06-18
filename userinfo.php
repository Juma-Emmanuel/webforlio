<?php
if($_SERVER['REQUEST_METHOD']=='POST'){
$name= $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
//Database connection
$conn = new mysqli ('localhost','root','','user_info');
if($conn){
  $sql="insert into user_data(name,email,message)
  values('$name','$email','$message')";
  $result=mysqli_query($conn, $sql);
  if($result){
    echo "message sent succesfully...";
  }else{
    die(mysqli_error($con));
      }
    }else{
      die(mysqli_error($conn));
    }

 }
?>