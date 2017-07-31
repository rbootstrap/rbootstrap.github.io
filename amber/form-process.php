<?php
$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Please enter your Name.";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Please enter your Email Address.";
} else {
    $email = $_POST["email"];
}

// Phone
if (empty($_POST["subject"])) {
    $errorMSG = "Please enter the Subject.";
} else {
    $subject = $_POST["subject"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Please enter your Message";
} else {
    $message = $_POST["message"];
}


$EmailTo = "receiver@yourhost.com";
$Subject = "An Enquiry From Amber";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:email@host.com");

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
		echo "Could not send mail!";
    } else {
		echo $errorMSG;
    }
}

?>