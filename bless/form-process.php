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

$Subject="RSVP";

$events=$_POST["events"];
$no_of_people=$_POST["number_of_people"];

//Set the Receiver Email ID and Subject here
$EmailTo = "receiver@gmail.com";
$Subject = "RSVP";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Events: ";
$Body .= $events;
$Body .= "\n";
$Body .= "No. Of People: ";
$Body .= $no_of_people;
$Body .= "\n";

//Set the From Email Address
$success = mail($EmailTo, $Subject, $Body, "From:contact@yourdomain.com");

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