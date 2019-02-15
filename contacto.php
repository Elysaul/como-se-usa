<?php

$message= "\n--------------DATOS ENVIADOS DESDE TOKENGAMING.COM--------------";

$message.= "\n";

$message.= "\nNOMBRE: ".$_POST['nombre'];

$message.= "\n";

$message.= "\nCOMPAÑÍA: ".$_POST['compania'];

$message.= "\n";

$message.= "\nCORREO: ".$_POST['correo'];

$message.= "\n";

$message.= "\nTELÉFONO: ".$_POST['telefono'];

$message.= "\n";

$message.= "\n".$_POST['mensaje'];



//En la siguiente linea ingresamos nuestra dirección de correo

$to = "accounts@cryptobet.com";
$subject = "".$_POST['nombre']." from ".$_POST['correo'];

// compose headers
$headers = "From: accounts@cryptobet.com\r\n";
$headers .= "Reply-To: accounts@cryptobet.com\r\n";
$headers .= "X-Mailer: PHP/".phpversion();


// send email
if(!mail($to, $subject, $message, $headers)) {
    return "False";
} else {
    return "true";
}



?>