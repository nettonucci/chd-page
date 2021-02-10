<?php 
	$nome 		= strip_tags($_POST["nome"]);
	$email 		= strip_tags($_POST["email"]);
	$telefone 	= strip_tags($_POST["telefone"]);
	$mensagem 		= strip_tags($_POST["mensagem"]);

	$to = 'comercial@chdservice.com.br';
	$subject = '(Novo) Contato do Site - CHD Service';

	$message .= "<strong>Nome: </strong> ".$nome."<br>";
	$message .= "<strong>E-mail: </strong> ".$email."<br>";
	$message .= "<strong>Telefone: </strong> ".$telefone."<br>";
	$message .= "<strong>Mensagem: </strong> ".$mensagem."<br>";

	$headers = "From: " . $email . "\r\n";
	$headers .= "Reply-To: ". $email . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

	if(mail($to, $subject, $message, $headers)):
		echo "<span class='green'>Sua mensagem foi enviada com sucesso!</span>";
	else:
		echo "<span class='red'>Desculpe, não foi possível enviar sua mensagem</span>";
	endif;
?>