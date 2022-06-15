<?php



$sitename = "ООО 'Дельта' - производство щебня";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка с сайта \"$sitename\"";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__.'/PHPMailer/src/Exception.php';
require_once __DIR__.'/PHPMailer/src/PHPMailer.php';
require_once __DIR__.'/PHPMailer/src/SMTP.php';
 

$subject = 'Заявка с лендинга';
$from = 'no-reply@drenazh.spb.ru';
$fromName = 'Уведомления c лендинга по дренажу';
$login = 'no-reply@drenazh.spb.ru';
$password = 'SA32$#521!@ea';
$toMail = 'townweb@yandex.ru';
$toMailName = 'Ярослав';



$mail = new PHPMailer;
 try {
$mail->CharSet = 'UTF-8';
 
// Настройки SMTP
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPDebug = 0;
$mail->Host = 'ssl://smtp.beget.ru';
$mail->Port = 465;
$mail->Username = $login;
$mail->Password = $password;

// От кого
$mail->setFrom($from, $fromName);		

// Кому
$mail->addAddress($toMail, $toMailName);
 
// Тема письма
$mail->Subject = $subject;

// Тело письма
$body = '<p><strong>Имя:</strong>'.$name.'</p>
 <p><strong>Телефон:</strong>'.$phone.'</p>';
$mail->msgHTML($body);
 
 
$mail->send();


} catch (phpmailerException $e) {
  echo $e->errorMessage(); //Pretty error messages from PHPMailer
} catch (Exception $e) {
  echo $e->getMessage(); //Boring error messages from anything else!
}