<?php
require 'conectare.php';
if (isset($_GET['mic']) && isset($_GET['gender_id']) && isset($_GET['category_id'])) {
    $gender = $_GET['gender_id'];
    $categorie = $_GET['category_id'];
     $sql = "SELECT * FROM products WHERE gender_id = '$gender' AND categorie_id = '$categorie' ORDER BY price ASC";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
   
} else if (isset($_GET['mare']) && isset($_GET['gender_id']) && isset($_GET['category_id'])) {
    $gender = $_GET['gender_id'];
    $categorie = $_GET['category_id'];
    $sql = "SELECT * FROM products WHERE gender_id = '$gender' AND categorie_id = '$categorie' ORDER BY price DESC";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
    return;
} 
// else if (isset($_GET['mare']) && isset($_GET['gender_id'])) {
//     $gender = $_GET['gender_id'];
//     $sql = "SELECT * FROM products WHERE gender_id = '$gender' ORDER BY price ASC";
//     $query = mysqli_query($conectare, $sql);
//     $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
//     echo json_encode($result);
//     return;
// }
else if (isset($_POST['gender_id']) && isset($_POST['category_id'])) {
    $gender = $_POST['gender_id'];
    $categorie = $_POST['category_id'];
    $sql = "SELECT * FROM products WHERE gender_id = '$gender' AND categorie_id = '$categorie'";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
    return;
} 
//showResultFromMeniuPreview()
else if (isset($_POST['gender_id_click']) && isset($_POST['categorie_id_click'])) {
    $genderIdClick = $_POST['gender_id_click'];
    $categorieIdClick = $_POST['categorie_id_click'];
    $sql = "SELECT * FROM products WHERE gender_id = '$genderIdClick' AND categorie_id = '$categorieIdClick'";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
    return;
} //
else if(isset($_POST['gender_id_click'])){
    $genderIdClick=$_POST['gender_id_click'];
    $sql = "SELECT * FROM products WHERE gender_id = '$genderIdClick'";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
    return;
}
else if (isset($_GET['mic'])) {
    $sql = "Select * FROM products ORDER BY price ASC";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
    return;
}

else if (isset($_GET['mare'])) {
    $sql = "Select * FROM products ORDER BY price DESC";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
    return;
}

else {
    $sql = "Select * FROM products";
    $query = mysqli_query($conectare, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);
    echo json_encode($result);
}




?>