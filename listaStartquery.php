<?php
require 'conectare.php';

// $barbat = array();
// if(isset($_GET['barbat'])){
//    $sql= "SELECT c.categorie_name
// FROM products p
// INNER JOIN categorie c ON p.categorie_id = c.categorie_id
// WHERE p.gender_id = 1";

//     $query = mysqli_query($conectare, $sql);
//     if ($query) {
//         $barbat = mysqli_fetch_all($query, MYSQLI_ASSOC);
//     }
// }

$sql = "SELECT * FROM gender";
$query = mysqli_query($conectare, $sql);
$data = mysqli_fetch_all($query, MYSQLI_ASSOC);
echo json_encode($data);
?>
