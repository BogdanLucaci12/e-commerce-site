<?php
require 'conectare.php';
$text=$_POST['text'];
$text=trim($text);
$sql = "SELECT * FROM products WHERE product_name LIKE '%$text%' OR description LIKE '%$text%'";
$query=mysqli_query($conectare, $sql);
$result=mysqli_fetch_all($query);
echo json_encode($result);