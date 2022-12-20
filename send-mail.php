<?php

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

$to = "sales@intiqaal.com";
$toName = "Intiqaal";
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
 
// echo 'iii',
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtpout.secureserver.net";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->Username = "m.hadjsalem@intiqaal.com";
$mail->Password = "Amiri%%12";

$mail->setFrom($email, "Admin");
$mail->AddReplyTo($email, $name);
$mail->addAddress($to, $toName);

$mail->Subject = $subject;
$mail->Body = "Email: ".$email."\n Name: ".$name."\n Subject: ".$subject."\n Message: ".$message."\n";

$mail->send();

header("Location: index.html"); // Redirect after success 