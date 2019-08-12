<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'danngu@uw.edu';
    $email_sub = 'New Form Submission';
    $email_body = 'Name: $name \n'. 'Email: $email \n'. 'Message: $message \n';

    $to = 'danngu@uw.edu';

    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    mail($to, $email_sub, $email_body, $headers);

    header("Location: index.html");
?>