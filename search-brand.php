<?php
require 'conectare.php';
$text = $_POST['text'];
$text = trim($text);
$sql = "SELECT * FROM brands WHERE brand_name like '%$text%'";
$query = mysqli_query($conectare, $sql);
$result = mysqli_fetch_all($query);
echo json_encode($result);
