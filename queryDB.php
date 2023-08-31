<?php
require 'conectare.php';
if (isset($_POST['gender_id']) && isset($_POST['category_id'])) {
    $gender = $_POST['gender_id'];
    $categorie = $_POST['category_id'];
    $sql = "SELECT * FROM products WHERE gender_id = '$gender' AND categorie_id = '$categorie'";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
} 
else {
    $sql = "Select * FROM products";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
}
if(isset($_GET['mic'])){
    $sql = "Select * FROM products ORDER BY price ASC";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
}
if(isset($_GET['mare'])){
    $sql = "Select * FROM products ORDER BY price DESC";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
}




?>