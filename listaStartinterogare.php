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
if(isset($_POST['category'])&& isset($_POST['genderID'])){
    $category=$_POST['category'];
    $genderID=$_POST['genderID'];
    $sqlimbracaminte="SELECT i.imbracaminte_name, i.imbracaminte_id FROM products p 
    INNER JOIN imbracaminte i ON p.imbracaminte_id = i.imbracaminte_id
    WHERE p.gender_id='$genderID' and p.categorie_id='$category'";
    $queryimbracaminte=mysqli_query($conectare ,$sqlimbracaminte);
    $imbracaminte=array();
    while($imbracamintereturnare=mysqli_fetch_assoc($queryimbracaminte)){
      $imbracaminte[]=$imbracamintereturnare;
    }
    echo json_encode($imbracaminte);
}
?>