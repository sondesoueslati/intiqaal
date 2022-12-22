<?php
require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$recaptcha = $_POST['g-recaptcha-response'];
 

if(!empty($name) && !empty($email) && !empty($subject) && !empty($message)){
    // reCAPTCHA validation
    if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])) {
        // Google secret API
        $secretAPIkey = '6LdoM5cjAAAAAEd4d2iikrmvTUcQ06XgRA5SueiK';
        // reCAPTCHA response verification
        $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretAPIkey.'&response='.$_POST['g-recaptcha-response']);
        // Decode JSON data
        $response = json_decode($verifyResponse);
            if($response->success){
               

            $to = "sondes@beta-systemes.com";
            $toName = "Intiqaal";


            $mail = new PHPMailer(true);
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            // echo 'iii',
            $mail->isSMTP();                
            $mail->SMTPAuth = true;

            $mail->Host = "mail.beta-systemes.com";
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;
            $mail->SMTPSecure = 'ssl';
            $mail->Username = "sondes@beta-systemes.com";
            $mail->Password = "cK4xz6i1";

            $mail->setFrom($email, "Admin");
            $mail->AddReplyTo($email, $name);
            $mail->addAddress($to, $toName);

            $mail->Subject = $subject;
            $mail->Body = "Email: ".$email."\n Name: ".$name."\n Subject: ".$subject."\n Message: ".$message."\n";

            $mail->send();

            header("Location: index.html"); // Redirect after success 
                            $response = array(
                                "status" => "alert-success",
                                "message" => "Your mail have been sent."
                            );
                        } 
                        else {
                            $response = array(
                                "status" => "alert-danger",
                                "message" => "Robot verification failed, please try again."
                            );
                        }       
                } 
                else{ 
                    $response = array(
                        "status" => "alert-danger",
                        "message" => "Plese check on the reCAPTCHA box."
                    );
                } 
            } 
            
            else{ 
                $response = array(
                    "status" => "alert-danger",
                    "message" => "All the fields are required."
                );
            }

?>










