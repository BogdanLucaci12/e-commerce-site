<?php
require 'conectare.php';

if (isset($_POST['gender'])) {
    $gender = $_POST['gender'];
    $sqlgender = "SELECT c.categorie_name, c.categorie_id FROM products p
    INNER JOIN categorie c ON p.categorie_id = c.categorie_id
    WHERE p.gender_id = '$gender'";
    $querygender = mysqli_query($conectare, $sqlgender);
    $categoryBygender = array();
    while ($fetchgender = mysqli_fetch_assoc($querygender)) {
        $categoryBygender[] = $fetchgender;
    }

    echo json_encode($categoryBygender);
}
// if(isset($_POST['category'])){
//     $category=$_POST['category'];
//     $sqlimbracaminte="SELECT "
// }
?>