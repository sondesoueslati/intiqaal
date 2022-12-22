<?php

$email = $_POST["news-email"];
$to = "sondes@beta-systemes.com";
$toName = "Intiqaal";
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
  
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "mail.beta-systemes.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->Username = "sondes@beta-systemes.com";
$mail->Password = "cK4xz6i1";

$mail->setFrom($email, "Admin");
$mail->AddReplyTo($email, "newsletter member");
$mail->addAddress($to, $toName);

$mail->Subject = "Newsletter new Subscriber!";
$mail->Body = "Email: ".$email." Has Subscribed to your newsletter.";

$mail->send();

header("Location: index.html"); 