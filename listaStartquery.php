<?php
require 'conectare.php';

$sql = "SELECT * FROM gender";
$query = mysqli_query($conectare, $sql);
$data = mysqli_fetch_all($query, MYSQLI_ASSOC);
echo json_encode($data);
?>
