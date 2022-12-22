<?php

$email = $_POST["news-email"];
$to = "sales@intiqaal.com";
$toName = "Intiqaal";
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);
  
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtpout.secureserver.net";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 465;
$mail->SMTPSecure = 'ssl';
$mail->Username = "m.hadjsalem@intiqaal.com";
$mail->Password = "Amiri%%12";

$mail->setFrom($email, "Admin");
$mail->AddReplyTo($email, "newsletter member");
$mail->addAddress($to, $toName);

$mail->Subject = "Newsletter new Subscriber!";
$mail->Body = "Email: ".$email." Has Subscribed to your newsletter.";

$mail->send();

header("Location: index.html"); 