<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'peter@peterschuelke.com';
  $subject = 'peterschuelke.com - Message';
  $msg = "From: $name \n" . "Message: $message \n";
  mail($to, $subject, $msg, 'From:' . $email);
  
  //$replysub = 'Message Confirmation from peterschuelke.com';
  //$reply = 'Thank you for submitting a message. I will be responding shortly. Peter';
  //mail($email, $replysub, $reply, 'From: ' . $to);
  
?>
<!--<meta http-equiv="refresh" content=".25;url=/"> 