<?php

use PHPMailer\PHPMailer\PHPMailer;

use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'conectare.php';
if(isset($_POST['email'])){
    $user=mysqli_real_escape_string($conectare, trim($_POST['email']));
    // $user=$_POST['email'];
      $sql="SELECT newsletter_user FROM useremailnewsletter WHERE newsletter_user='$user'";
      $query=mysqli_query($conectare, $sql);
       $row=mysqli_num_rows($query);
       
    if($row>0){
        header("Location:homepage.php?info=exista");
    }
    else{
        $gender_id = isset($_POST['gen']) ? ($_POST['gen'] === "barbat" ? 1 : ($_POST['gen'] === "femeie" ? 2 : null)) : null;
        if($gender_id==null){
            header("Location:homepage.php?info=gender");
        }
        else{
        $sql = "INSERT INTO useremailnewsletter(newsletter_user, gender_id) VALUES ('$user', '$gender_id')";
        mysqli_query($conectare, $sql);
            $mail = new PHPMailer(true);
$mail->isSMTP();
$mail->Host='smtp.gmail.com';
$mail->SMTPAuth=true;
$mail->Username= 'clotherforall@gmail.com';
$mail->Password= 'tncnucjpcmcneiai';
$mail->SMTPSecure='ssl';
$mail->Port=465;
$mail->setFrom('clotherforall@gmail.com');
$mail->addAddress($_POST['email']);
$mail->isHTML(true);
$mail->Subject='Welcome to Clothes for All';
$mail->Body='Ne bucuram ca ai ales sa te abonezi acestui newsletter. Iti vom trimite cele noi oferte pentru buzunarul tau';
$mail->send();
        header("Location:homepage.php?info=succes");
        }
}
}
// else {

// if(isset($_POST['submit'])){
// $mail=new PHPMailer(true);

// $mail->isSMTP();
// $mail->Host='smtp.gmail.com';
// $mail->SMTPAuth=true;
// $mail->Username= 'clotherforall@gmail.com';
// $mail->Password= 'tncnucjpcmcneiai';
// $mail->SMTPSecure='ssl';
// $mail->Port=465;

// $mail->setFrom('clotherforall@gmail.com');
// $mail->addAddress($_POST['email']);
// $mail->isHTML(true);
// $mail->Subject='Here is the subject';
// $mail->Body='Thiis is the <b>body</b>';
// $mail->send();

// echo "<script>
// alert('Send succesful');
// document.location.href='project.php';
// </script>";
// }
// }