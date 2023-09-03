<?php
require 'conectare.php';
if (isset($_GET['mic']) && isset($_GET['gender_id'])) {
    $gender = $_GET['gender_id'];
    $sql = "SELECT * FROM products WHERE gender_id = '$gender' ORDER BY price ASC";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
    return;
}
else if(isset($_GET['mare']) && isset($_GET['gender_id'])){
    $gender = $_GET['gender_id'];
    $sql = "SELECT * FROM products WHERE gender_id = '$gender' ORDER BY price DESC";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
    return;
}
?>